import React, { useEffect, useState } from 'react'
import { IoPersonCircleOutline } from "react-icons/io5";
import styles from './index.module.css'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../Firebase';

export default function Profile() {
  const [adminData, setAdminData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const userId = sessionStorage.getItem("user_id:") || localStorage.getItem("user_id:");

  useEffect(() => {
    if (userId) {
      const fetchUserData = async () => {
        try {
          const superRef = doc(db, "userAdmin", userId);
          const superSnap = await getDoc(superRef);
          if (superSnap.exists()) {
            setAdminData(superSnap.data());
            return;
          }

          const adminRef = doc(db, "auth", userId);
          const adminSnap = await getDoc(adminRef);
          if (adminSnap.exists()) {
            setAdminData(adminSnap.data());
            return;
          }

          setNotFound(true);
        } catch (error) {
          console.error("Error getting user data:", error);
          setNotFound(true);
        }
      };

      fetchUserData();
    }
  }, [userId]);

  if (notFound) {
    return <div>No profile found</div>;
  }

  if (!adminData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="d-flex align-items-center justify-content-center h-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center d-flex flex-column py-3 col-lg-4 col-md-9 col-11 justify-content-center gap-2 align-items-center text-start ">
        <IoPersonCircleOutline className={styles.iconprofile} />
        <div className='d-flex flex-column align-items-center justify-content-center col-12 gap-2'>
          <div className='d-flex flex-column align-items-start gap-3'>
            <p><strong>Name:</strong> {adminData.userName}</p>
            <p><strong>Email:</strong> {adminData.userEmail}</p>
            <p><strong>Address:</strong> {adminData.userAddress}</p>
            <p><strong>Phone:</strong> {adminData.userPhone}</p>
            <p><strong>Role:</strong> {adminData.userRole}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
