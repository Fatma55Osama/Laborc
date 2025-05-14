import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import { useModale } from '../../Store';
import { IoMdNotifications } from 'react-icons/io';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

export default function Notafication() {
    const { closeModal } = useModale();
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        const fetchMessages = async () => {
            const db = getFirestore();

            // جلب الـ user_id من sessionStorage أو localStorage
            const userId = localStorage.getItem("user_id") || sessionStorage.getItem("user_id");

            if (!userId) return;  // إذا لم يكن هناك user_id، نوقف العملية

            // استعلام لجلب الرسائل بناءً على مقارنة user_id و booking_user_id
            const q = query(
                collection(db, "Rebookinguser"),
                where("booking_user_id", "==", userId)  // مقارنة booking_user_id بـ user_id
            );

            const querySnapshot = await getDocs(q);
            const fetchedMessages = [];

            querySnapshot.forEach((doc) => {
                const data = doc.data();
                fetchedMessages.push({ id: doc.id, ...data });
            });

            setMessages(fetchedMessages);
        };

        fetchMessages();
    }, []);  // عند تحميل المكون، يتم جلب الرسائل


    return (
        <div className={styles.modal} onClick={() => closeModal(false)}>
            <div className={styles.content + " animate__animated animate__bounceInDown"} onClick={(e) => e.stopPropagation()}>
                <div className='container mt-3'>
                    <div className='border-bottom mb-3'>
                        <h5 className='p-1'>Notification Messages <IoMdNotifications /></h5>
                    </div>

                    {messages.length === 0 ? (
                        <p className='text-center'>No messages yet.</p>
                    ) : (
                        messages.map((msg, index) => (
                            <div key={index} className='overflow-hidden mb-2'>
                                <div className='d-flex justify-content-between'>
                                    <IoPersonCircleOutline className={styles.icon} />
                                    <div className='col-10 p-2' id={styles.massege}>
                                        <h5>Admin</h5>
                                        <p>{msg.message}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
