import React, { useEffect, useState } from 'react'
import { collection, doc, getDocs, query, updateDoc, where, } from "firebase/firestore";
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';
import { db } from '../../Firebase';
import image from '../../assets/unselected-chat.cfb49f55 (1).svg'
import styles from './index.module.css'
export default function Rebooking() {
  const [rebookingUser, setRebookingUser] = useState();
  // const [selectedBookingId, setSelectedBookingId] = useState(null);
  const navigate = useNavigate()

  const getAllRebooking = async (userId) => {
    const q = query(collection(db, "Rebookinguser"), where("user_id", "==", userId));
    const querySnapshot = await getDocs(q);
    let userbooking = []
    querySnapshot.forEach((doc) => {
      userbooking.push({ id: doc.id, ...doc.data() })

    });
    setRebookingUser(userbooking)
  };

  useEffect(() => {
    const userId =
      sessionStorage.getItem("user_id:") || localStorage.getItem("user_id:");

    if (userId) {
      getAllRebooking(userId);
    }
    else {
      navigate("/loginAdmin")
    }
  }, []);
  // const validationSchema = Yup.object({
  //   message: Yup.string()
  // })
  // const onSubmit = async (value, { resetForm }) => {
  //   if (!selectedBookingId) {
  //     alert("Please select a booking first.");
  //     return;
  //   }
  //   try {
  //     const bookingRef = doc(db, "Rebookinguser", selectedBookingId);
  //     await updateDoc(bookingRef, {
  //       message: value.message
  //     });
  //     alert("Message added successfully.");
  //     resetForm();
  //     // لو حبيت تحدث البيانات بعد التعديل
  //     const userId = sessionStorage.getItem("user_id:") || localStorage.getItem("user_id:");
  //     if (userId) getAllRebooking(userId);
  //   } catch (err) {
  //     console.error("Error updating document: ", err);
  //   }
  // };
  // const logout = () => {
  //   sessionStorage.clear()
  //   localStorage.clear()
  //   navigate("/loginAdmin")
  // }
  // const selectedBooking = rebookingUser?.find(user => user.id === selectedBookingId);
  return (
    <div className=' col-12 border-end d-flex flex-column flex-grow-1 '>
      <div className={`col-12 container d-flex flex-column pt-3 ${rebookingUser?.length > 0 ? null : " d-flex flex-column flex-grow-1  justify-content-around align-items-center  "}`}>
        <h3>Rebooking</h3>
        {/* <table>
        <thead>
          <tr>
            <td>No</td>
            <td>Name</td>
          </tr>
        </thead>
        <tbody>
          {
            rebookingUser?.map((el, index) => {
              return (
                <tr key={el.id} onClick={() => { navigate(`/Dashboard/rebooking/edit/${el.id}`) }}>
                  <td>{index + 1}</td>
                  <td>{el.name}</td>
                </tr>
              )
            })
          }
          <tr>
            <th>name</th>
          </tr>
        </tbody>
      </table> */}
        {/* <Formik validationSchema={validationSchema} initialValues={{ message: "" }} onSubmit={onSubmit}>
        <Form>
          <Field type='message' placeholder="Enter the required tests" name="message" />
          <button type="onSubmit" className='btn btn-primary'>Submit</button>
        </Form>
      </Formik> */}
        {/* <p>Selected booking ID: {selectedBookingId || "None"}</p>
      {selectedBooking && (
        <div style={{ marginTop: '20px' }}>
          <h5>Selected Booking Details</h5>
          <p><strong>Name:</strong> {selectedBooking.name}</p>
          <p><strong>Message:</strong> {selectedBooking.message || "No message yet."}</p>
        </div>
      )} */}
        {/* <button className='btn btn-danger' onClick={logout}>LogOut</button> */}
        {
          rebookingUser?.length > 0 ? (
            <div className="table-responsive mt-3">
              <table className="table align-middle table-bordered">
                <thead className="table-light">
                  <tr>
                    <th scope="col">Number </th>
                    <th scope="col">Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Date Booking</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {/* Row 1 */}
                  {
                    rebookingUser?.map((el, index) => {
                      return (
                        <tr key={el.id} onClick={() => { navigate(`/Dashboard/rebooking/edit/${el.id}`) }}>
                          <td>{index + 1}</td>
                          <td>
                            <div className="d-flex align-items-center gap-3">
                              <img
                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                alt="avatar"
                                className="rounded-circle"
                                width="48"
                                height="48"
                              />
                              <div>
                                <div className="fw-bold">{el.name}</div>
                                <div className="text-muted small">United States</div>
                              </div>
                            </div>
                          </td>
                          <td>
                            Zemlak, Daniel and Leannon <br />

                          </td>
                          <td>Purple</td>
                          <td>
                            <button className="btn btn-sm btn-outline-secondary">Details</button>
                          </td>
                        </tr>
                      )
                    })
                  }



                </tbody>

              </table>
            </div>
          ) : (
            <div className='col-12  flex-grow-1 d-flex flex-column justify-content-center align-items-center gap-4' id={styles.imgnobooking}>
              <img src={image} alt="" />
              <h5>There are no booking requests</h5>
            </div>
          )
        }

      </div>


    </div>
  )
}
