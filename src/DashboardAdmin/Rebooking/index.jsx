import React, { useEffect, useState } from 'react'
import { collection, doc, getDocs, query, updateDoc, where, } from "firebase/firestore";
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../../Firebase';
import image from '../../assets/unselected-chat.cfb49f55 (1).svg'
import styles from './index.module.css'
export default function Rebooking() {
  const [rebookingUser, setRebookingUser] = useState();
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

  return (
    <div className=' col-12 border-end d-flex flex-column flex-grow-1 '>
      <div className={`col-12 container d-flex flex-column pt-3 ${rebookingUser?.length > 0 ? null : " d-flex flex-column flex-grow-1  justify-content-around align-items-center  "}`}>
        <h3>Rebooking</h3>

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
                  {
                    rebookingUser?.map((el, index) => {
                      return (
                        <tr key={el.id} onClick={() => { navigate(`/Dashboard/rebooking/edit/${el.id}`) }}>
                          <td>{index + 1}</td>
                          <td>
                            <div className="d-flex align-items-center gap-3">
                              <img
                                src="https://w7.pngwing.com/pngs/858/581/png-transparent-profile-icon-user-computer-icons-system-chinese-wind-title-column-miscellaneous-service-logo.png"
                                alt="avatar"
                                className="rounded-circle"
                                width="48"
                                height="48"
                              />
                              <div>
                                <div className="fw-bold">{el.firstName}  {el.lastName}</div>
                                <div className="text-muted small">{el.phone}</div>
                              </div>
                            </div>
                          </td>
                          <td>
                           {el.Addrese}<br />

                          </td>
                          <td>{el.date}</td>
                          <td>
                          <Link className='nav-link' to={`/Dashboard/rebooking/edit/${el.id}`}> <button className="btn btn-sm btn-outline-secondary">Details</button></Link> 
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
