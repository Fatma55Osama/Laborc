import { collection, doc, documentId, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../../Firebase';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

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
      setBookingDetails(prevState => ({
        ...prevState,
        message: values.message
      }));
    Swal.fire({
          icon: 'success',
          title: 'Message added successfully.',
        });
      resetForm();
    } catch (err) {
      console.error("Error updating document: ", err);
    }
  };

  useEffect(() => {
    getBookingDetails(params.taskId);
  }, [params.taskId]);

  return (
    <div className=' col-12 h-100 d-flex justify-content-center align-items-center'>
 <div className='col-lg-6 col-md-9 col-11 py-5  container shadow d-flex flex-column justify-content-center'>
          <p><strong>Name:</strong>  {bookingDetails?.firstName} {bookingDetails?.lastName} </p>
          <p><strong> Email: </strong>{bookingDetails?.email}</p>
          <p><strong>Phone: </strong> {bookingDetails?.phone}</p>
          <p> <strong>Booking Date:</strong>  {bookingDetails?.date}</p>
          <p> <strong>Massage User:</strong>  {bookingDetails?.messages}</p>
          <p> <strong>Addrese:</strong>  {bookingDetails?.Addrese}</p>
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
    </div>
   
  );
}
