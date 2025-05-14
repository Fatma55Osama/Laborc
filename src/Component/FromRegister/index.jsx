import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import { FaRegAddressBook, FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { AiOutlinePhone } from "react-icons/ai";
import * as Yup from 'yup'
import logo from '../../assets/header-logo2.png'
import { auth, db } from '../../Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import Swal from 'sweetalert2';
export default function FormRegister() {
  // const auth = getAuth();
  const navigate = useNavigate()
  const validationSchema = Yup.object({
    userName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").matches(
      /^[a-zA-Z]{2}[a-zA-Z\s]{1,48}$/,
      'Name must be at least 2 letters and may contain spaces only after that'
    ).required('Name is required'),
    userEmail: Yup.string().email('Invalid email').required('Email is required').test('no-spaces', 'Email must not contain spaces', value => !/\s/.test(value)).matches(/^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9.-]+\.(com|net|org|edu)$/, 'Please enter a valid and realistic email'),
    userPassword: Yup.string().required("password is required").min(8, 'Password must be at least 8 characters')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/\d/, 'Password must contain at least one number')
      .matches(/[@$!%*?&]/, 'Password must contain at least one special character'),
    userPhone: Yup.string().typeError('phone must be a number').required('phone is required').matches(/^[0-9]{10,15}$/, 'Phone number must be between 10 and 15 digits'),
    userAddress: Yup.string().required('Address is required'),
    userRole: Yup.string().oneOf(['admin', 'superAdmin'], 'Please select a valid role').required('Role is required'),
  })
  const checksuper = async (user_id) => {
    const q = query(collection(db, "userAdmin"), where("user_id", "==", user_id));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length > 0) {
      return "superAdmin";
    }
    return "admin";
  };
  useEffect(() => {
    const user_id = sessionStorage.getItem("user_id:") || localStorage.getItem("user_id:");
    const token = sessionStorage.getItem("Token") || localStorage.getItem("Token");

    if (user_id && token) {
      checksuper(user_id).then(role => {
        if (role !== "superAdmin") {
          Swal.fire({
            title: 'Access Denied!',
            text: 'Only superAdmin can access this page.',
            icon: 'warning',
            confirmButtonText: 'OK'
          }).then(() => {
            navigate("/loginAdmin");
          });
        } else {
          navigate("/registerAdmin");
        }
      }).catch(() => {
        navigate("/loginAdmin");
      });
    } else {
      Swal.fire({
        title: 'Access Denied!',
        text: 'Only superAdmin can access this page.',
        icon: 'warning',
        confirmButtonText: 'OK'
      }).then(() => {
        navigate("/loginAdmin");
      });
    }
  }, []);
  const handleRegister = async (values) => {
    const selectedRole = values.userRole
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, values.userEmail, values.userPassword);
      const user = userCredential.user;

      const userCollection = selectedRole === 'superAdmin' ? 'userAdmin' : 'auth';

      await setDoc(doc(db, userCollection, user.uid), {
        userName: values.userName,
        userEmail: values.userEmail,
        userPhone: values.userPhone,
        userAddress: values.userAddress,
        userRole: selectedRole,
        user_id: user.uid,
        createdAt: new Date()
      });

      sessionStorage.setItem("Token", user?.accessToken) || localStorage.setItem("Token", user?.accessToken);
      sessionStorage.setItem("user_id:", user?.uid) || localStorage.setItem("user_id:", user?.uid)
      sessionStorage.setItem("role", selectedRole) || localStorage.setItem("role", selectedRole);

      Swal.fire({
        title: 'Registration Successful!',
        text: 'You have successfully registered. Welcome!',
        icon: 'success',
        confirmButtonText: 'OK'
      });


      if (selectedRole === 'superAdmin') {
        navigate("/registerAdmin");
      } else {
        navigate("/loginadmin");
      }
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        Swal.fire({
          title: 'Registration Failed!',
          text: 'This email is already registered. Please log in instead.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      } else {
        console.error("Register error:", error.message);
        alert("Registration failed: " + error.message);
      }
    }
  };


  // const app = initializeApp(firebaseConfig);
  return (
    <div className='col-12'>
      <Formik validationSchema={validationSchema} initialValues={{ userName: "", userEmail: "", userPassword: "", userPhone: "", userAddress: "", userRole: "" }} onSubmit={handleRegister}>
        {({ errors, touched }) => (
          <Form className='d-flex flex-column justify-content-center align-items-center  gap-2 gap-lg-3 '>
            <div className=' d-flex d-md-none' id={styles.logodiv}>
              <img src={logo} alt="" />
            </div>
            <div className=' col-md-10 px-md-3  pe-5 pe-md-0'>
              <h3>Sign Up Admin</h3>
              <span>Enter details to create your account</span>
            </div>
            <div className={styles.inputGroup + ' position-relative  '}>
              <Field type="text" name="userName" placeholder="Enter Your Name" className={styles.formControl + ` ${errors.userName && touched.userName ? styles.error : ""}`} />
              <FaRegUser className={styles.iconform + ' position-absolute top-50 translate-middle-y  '} />
              <ErrorMessage component="div" name='userName' className={styles.errorMessage + ' animate__animated animate__bounce text-danger pe-3 pt-md-1'} />
            </div>

            <div className={styles.inputGroup + ' position-relative   '}>
              <Field type="email" name="userEmail" placeholder="Enter Your Email" className={styles.formControl + ` ${errors.userEmail && touched.userEmail ? styles.error : ""}`} />
              <MdOutlineEmail className={styles.iconform + ' position-absolute top-50 translate-middle-y '} />
              <ErrorMessage component="div" name='userEmail' className={styles.errorMessage + ' text-danger animate__animated animate__bounce   pe-3 pt-md-1 '} />
            </div>

            <div className={styles.inputGroup + ' position-relative  '}>
              <Field type="password" name="userPassword" placeholder="Enter Your Password" className={styles.formControl + ` ${errors.userPassword && touched.userPassword ? styles.error : ""}`} />
              <TbLockPassword className={styles.iconform + ' position-absolute top-50 translate-middle-y '} />
              <ErrorMessage component="div" name='userPassword' className={styles.errorMessage + ' animate__animated animate__bounce  text-danger border-danger pt-md-1 '} />
            </div>

            <div className={styles.inputGroup + ' position-relative  '}>
              <Field type="number" name="userPhone" placeholder="Enter Your Phone" className={styles.formControl + ` ${errors.userPhone && touched.userPhone ? styles.error : ""}`} />
              <AiOutlinePhone className={styles.iconform + ' position-absolute top-50 translate-middle-y '} />
              <ErrorMessage component="div" name='userPhone' className={styles.errorMessage + ' animate__animated animate__bounce text-danger border-danger pt-md-1'} />
            </div>

            <div className={styles.inputGroup + ' position-relative  '}>
              <Field type="text" name="userAddress" placeholder="Enter Your Address" className={styles.formControl + ` ${errors.userAddress && touched.userAddress ? styles.error : ""}`} />
              <FaRegAddressBook className={styles.iconform + ' position-absolute top-50 translate-middle-y '} />
              <ErrorMessage component="div" className={styles.errorMessage + ' animate__animated animate__bounce text-danger border-danger pt-md-1'} name='userAddress' />
            </div>
            <div className="form-group d-flex justify-content-start flex-wrap col-lg-9 mt-sm-3">
              <label>Choose Role:</label>
              <div className="form-check ">
                <label className="form-check-label">Admin
                  <Field type="radio" name="userRole" value="admin" className="form-check-input" />
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label">Super Admin
                  <Field type="radio" name="userRole" value="superAdmin" className="form-check-input" />
                </label>
              </div>
            </div>
            <div className='d-flex align-items-start m-0 col-10 px-3'>

              <p className='m-0 mt-1'>Already Registered?<Link to={"/loginAdmin"} className='text-decoration-none '>Login</Link> </p>
            </div>
            <button className={styles.formControlbutton + " rounded-5"} type='submit'>Register</button>


          </Form>
        )}

      </Formik>
    </div>
  )
}
