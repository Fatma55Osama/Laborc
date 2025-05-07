import { collection, doc, documentId, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../../Firebase';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

export default function Editbooking() {
  const params = useParams();
  const [bookingDetails, setBookingDetails] = useState(null);
  const navigate = useNavigate();

  const getBookingDetails = async (task_id) => {
    const q = query(collection(db, "Rebookinguser"), where(documentId(), "==", task_id));
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot)
    let data = {}
    querySnapshot.forEach((doc) => {
      data = { id: doc.id, ...doc.data() }
    })
    console.log(data)
    setBookingDetails(data)
  };

  useEffect(() => {
    getBookingDetails(params.taskId);
  }, []);

  const validationSchema = Yup.object({
    message: Yup.string().required("Message is required")
  });

  const onSubmit = async (values, { resetForm }) => {
    try {
      const bookingRef = doc(db, "Rebookinguser", params.taskId);
      await updateDoc(bookingRef, {
        message: values.message
      });
      alert("Message added successfully.");
      getBookingDetails(params.taskId); // Refresh data
      resetForm();
    } catch (err) {
      console.error("Error updating document: ", err);
    }
  };

 

  return (
    <div className='container'>
          <p><strong>Name:</strong> {bookingDetails?.name}</p>
          <p><strong>Current Message:</strong> {bookingDetails?.message || "No message yet."}</p>
      <Formik
        initialValues={{ message: "" }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <Field
              type='text'
              name='message'
              placeholder="Enter your message"
              className='form-control mb-2'
            />
          </div>
          <button type='onSubmit' className='btn btn-primary'>Submit Message</button>
        </Form>
      </Formik>
      <button onClick={() => navigate(-1)} className='btn btn-secondary mt-3'>Back</button>
    </div>
  );
}
