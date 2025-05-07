import React, { useEffect, useState } from 'react'
import profile from '../../assets/istockphoto-1300845620-1024x1024.jpg'
import { IoPersonCircleOutline } from "react-icons/io5";
import styles from './index.module.css'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../Firebase';
export default function Profile() {
  const [adminData, setAdminData] = useState(null);
  const userId = sessionStorage.getItem("user_id:") || localStorage.getItem("user_id:");
  console.log(userId);
  useEffect(() => {
    if (userId) {
      console.log("userId:", userId);
      const userDocRef = doc(db, "userAdmin", userId);
      getDoc(userDocRef)
        .then((docSnap) => {
          if (docSnap.exists()) {
            setAdminData(docSnap.data());
          } else {
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.error("Error getting document: ", error);
        })

    }
  }, [userId]);

  if (!adminData) {
    return <div>No data found</div>;
  }

  return (

    <div className="d-flex align-items-center justify-content-center h-100">
      <div className="bg-white shadow-lg  rounded-2xl p-8 w-full max-w-md text-center d-flex flex-column py-3 col-4 justify-content-center  gap-2 align-items-center text-start ">
        <IoPersonCircleOutline className={styles.iconprofile} />
        <div className='d-flex flex-column align-items-center justify-content-center col-12  gap-2'>
          <div className='d-flex flex-column align-items-start gap-3'>
          <p>{adminData.userName}</p>
          <p> {adminData.userEmail}</p>
          <p>{adminData.userAddress}</p> 
          <p>{adminData.userPhone}</p>
          </div>
          

        </div>


      </div>
    </div>
  );

}

