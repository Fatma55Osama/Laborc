import React from 'react'
import styles from './index.module.css'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Link } from 'react-router-dom'
import { FaRegAddressBook, FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { AiOutlinePhone } from "react-icons/ai";
import * as Yup from 'yup'
export default function FormRegister() {
  const validationSchema = Yup.object({
    userName: Yup.string().required('Name is required'),
    userEmail: Yup.string().email('Invalid email').required('Email is required'),
    userPassword: Yup.string().required("password is required"),
    userPhone: Yup.number().typeError('phone must be a number').required('phone is required'),
    userAddress: Yup.string().required('Address is required')

  })
  const handelRegister = (values) => {
    console.log(values)
  }
  return (
    <div className='col-12'>
      <Formik validationSchema={validationSchema} initialValues={{ userName: "", userEmail: "", userPassword: "", userPhone: "", userAddress: "" }} onSubmit={handelRegister}>
        {({ errors, touched }) => (
          <Form className='d-flex flex-column gap-3'>
            <div className='position-relative  '>
              <Field type="text" name="userName" placeholder="Enter Your Name" className={styles.formControl +  ` ${errors.userName && touched.userName ? styles.error : ""}`} />
              <FaRegUser className={styles.iconform + ' position-absolute top-50 translate-middle-y  '} />
              <ErrorMessage component="div" name='userName' className='text-danger border-danger pt-1' />
            </div>

            <div className='position-relative   '>
              <Field type="email" name="userEmail" placeholder="Enter Your Email" className={styles.formControl + ` ${errors.userEmail && touched.userEmail ? styles.error : ""}`} />
              <MdOutlineEmail className={styles.iconform + ' position-absolute top-50 translate-middle-y '} />
              <ErrorMessage component="div" name='userEmail' className='text-danger border-danger pt-1' />
            </div>

            <div className='position-relative  '>
              <Field type="password" name="userPassword" placeholder="Enter Your Password" className={styles.formControl + ` ${errors.userPassword && touched.userPassword ? styles.error : ""}`} />
              <TbLockPassword className={styles.iconform + ' position-absolute top-50 translate-middle-y '} />
              <ErrorMessage component="div" name='userPassword' className='text-danger border-danger pt-1' />
            </div>

            <div className='position-relative  '>
              <Field type="number" name="userPhone" placeholder="Enter Your Phone" className={styles.formControl + ` ${errors.userPhone && touched.userPhone ? styles.error : ""}`} />
              <AiOutlinePhone className={styles.iconform + ' position-absolute top-50 translate-middle-y '} />
              <ErrorMessage component="div" name='userPhone' className='text-danger border-danger pt-1' /> 
            </div>

            <div className='position-relative  '>
              <Field type="text" name="userAddress" placeholder="Enter Your Address" className={styles.formControl + ` ${errors.userAddress && touched.userAddress ? styles.error : ""}`} />
              <FaRegAddressBook className={styles.iconform + ' position-absolute top-50 translate-middle-y '} />
              <ErrorMessage component="div" className='text-danger border-danger pt-1' name='userAddress' />
            </div>
            <p className='m-0'>Already Registered?<Link to={"/loginAdmin"} className='text-decoration-none '>Login</Link> </p>
            <button className={styles.formControlbutton + " rounded-5"} type='submit'>Register</button>


          </Form>
        )}

      </Formik>
    </div>
  )
}
