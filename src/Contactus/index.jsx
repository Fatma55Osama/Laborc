import React, { useEffect, useRef } from 'react'
import styles from './index.module.css'
import Header from '../Component/Header'
import { Link, useNavigate } from 'react-router-dom'
import location from '../assets/contact-icon1.svg'
import phone from '../assets/contact-icon2.svg'
import email from '../assets/contact-icon3.svg'
import { FaAngleRight, FaRegClock } from 'react-icons/fa6'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import Footer from '../Component/Footer'
import { CiCalendarDate } from "react-icons/ci";
import { FiFolderPlus } from "react-icons/fi";
import Swal from 'sweetalert2'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../Firebase'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
export default function Contactus() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const Addrese = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const dateRef = useRef();
  const messageRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let user_id = localStorage.getItem('user_id') || sessionStorage.getItem('user_id')

    if (!user_id) {
      Swal.fire({
        icon: 'warning',
        title: 'You are not logged in!',
        text: 'Please login or register to proceed with the booking.',
        confirmButtonText: 'Go to Login',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/loginuser'); 
        }
      });
      return;
    }


    if (
      !firstNameRef.current || !firstNameRef.current.value ||
      !lastNameRef.current || !lastNameRef.current.value ||
      !emailRef.current || !emailRef.current.value ||
      !phoneRef.current || !phoneRef.current.value ||
      !dateRef.current || !dateRef.current.value ||
      !messageRef.current || !messageRef.current.value||
      !Addrese.current || !Addrese.current.value

    ) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Please fill out all fields!',
      });
      return;
    }

    const reservationData = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      date: dateRef.current.value,
      messages: messageRef.current.value,
      Addrese:Addrese.current.value,
      user_id: localStorage.getItem('user_id:') || sessionStorage.getItem('user_id:'),
      booking_user_id: localStorage.getItem('user_id') || sessionStorage.getItem('user_id'),

    };
    try {
      const docRef = await addDoc(collection(db, "Rebookinguser"), reservationData);
      Swal.fire({
        icon: 'success',
        title: 'Booking submitted!',
        text: 'Your booking has been sent successfully.',
      });

     
      firstNameRef.current.value = "";
      lastNameRef.current.value = "";
      emailRef.current.value = "";
      phoneRef.current.value = "";
      dateRef.current.value = "";
      messageRef.current.value = "";
      Addrese.current.value =""
    } catch (error) {
      console.error("Error adding document: ", error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to send booking. Please try again.',
      });
    }
  }


  return (
    <div className={styles.parentalldiv + " col-12"}>
      <div className={styles.div1 + " col-12 d-flex flex-column h-100 "}>
        <div className={styles.textdiv + ' container col-11  flex-grow-1 d-flex flex-column justify-content-center gap-2'}>
          <h1>Contact Us</h1>
          <span className='d-flex align-items-center '>
            <Link className='nav-link' to={"/"}>Home</Link>
            <FaAngleRight />
            <Link className='nav-link' to={"/Contactus"}>Contact Us</Link>
          </span>
        </div>
      </div>
      <div className={styles.div2 + "  col-12 d-flex justify-content-center align-items-center"}>
        <div className={styles.twoparts + ' container  d-flex justify-content-between'}>
          <div className={styles.part1 + " col-6 "}>

            <div className={styles.divhr + " me-4 d-flex  flex-column justify-sm-content-center align-sm-items-center gap-3 pb-4"}>
              <h2  data-aos="fade-right" data-aos-offset="13" data-aos-delay="450">Dr. Veronica Koelpin</h2>
              <h5  data-aos="fade-right" data-aos-offset="13" data-aos-delay="450">Lab Open</h5>
              <ul className='d-flex  gap-5'  data-aos="fade-right" data-aos-offset="13" data-aos-delay="450">
                <li><FaRegClock /><span>Monday - Friday</span></li>
                <li><FaRegClock /><span> 8:00 Am - 5:00 Pm</span></li>
              </ul>
            </div>

            <div className='d-flex flex-column align-items-start gap-4 mt-4'>
              <div className={styles.sec + ' d-flex align-items-center gap-3 ' }  data-aos="fade-right" data-aos-offset="13" data-aos-delay="450">
                <div className={styles.icon + " d-flex justify-content-center align-items-center"}>
                  <img src={location} width={24} alt="" />
                </div>
                <div className='d-flex flex-column gap-2'>
                  <h4>My Location</h4>
                  <span>123 Innovation Drive,ST 12345, USA</span>
                </div>
              </div>
              <div className={styles.sec + ' d-flex align-items-center gap-3 '}  data-aos="fade-right" data-aos-offset="13" data-aos-delay="450">
                <div className={styles.icon + " d-flex justify-content-center align-items-center"}>
                  <img src={phone} width={24} alt="" />
                </div>
                <div className='d-flex flex-column gap-2'>
                  <h4>Office Number</h4>
                  <span>123-456-7890</span>
                </div>
              </div>
              <div className={styles.sec + ' d-flex align-items-center gap-3 '}  data-aos="fade-right" data-aos-offset="13" data-aos-delay="450">
                <div className={styles.icon + " d-flex justify-content-center align-items-center"}>
                  <img src={email} width={24} alt="" />
                </div>
                <div className='d-flex flex-column gap-2' >
                  <h4>My Mail</h4>
                  <span>Dr. Veronica Koelpin@gmail.com</span>
                </div>
              </div>
              <Link to={"/service"} className={styles.service + ' nav-link btn py-3 px-4 rounded-0 mt-2'}>Our Services</Link>
            </div>

          </div>
          <div className={styles.part2 + " col-6 d-flex flex-column justify-content-center my-sm-5"}>
            <div className='container bg-white col-12 py-5' style={{ boxShadow: " 0px 4px 30px 0px rgba(0, 0, 0, 0.08)" }}>
              <form className='px-3 d-flex flex-column gap-4' onSubmit={handleSubmit}>

                <div className={styles.first + ' d-flex justify-content-between gap-4'}>
                  <div className='d-flex flex-column col-6 gap-2'>
                    <label>First Name*</label>
                    <input ref={firstNameRef} type="text" placeholder='First Name' />
                  </div>
                  <div className='d-flex flex-column col-6 gap-2 pe-lg-3'>
                    <label>Last Name*</label>
                    <input ref={lastNameRef} type="text" placeholder='Last Name' />
                  </div>
                </div>

                <div className={styles.second + ' d-flex justify-content-between gap-4'}>
                  <div className='d-flex flex-column col-6 gap-2'>
                    <label>Email Address*</label>
                    <input ref={emailRef} type="email" placeholder='Email' />
                  </div>
                  <div className='d-flex flex-column col-6 gap-2 pe-lg-3'>
                    <label>Phone Number*</label>
                    <input ref={phoneRef} type="number" placeholder='Phone Number' />
                  </div>
                </div>
             
                <div className={' d-flex flex-column col-12 gap-2'}>
                  <label>Rebooking*</label>

                  <input
                    ref={dateRef}
                    type="datetime-local"
                    min={new Date().toISOString().slice(0, 16)} max={new Date(
                      new Date().getFullYear(),
                      new Date().getMonth() + 1,
                      0,
                      23,
                      59
                    ).toISOString().slice(0, 16)}
                    placeholder='Rebooking'
                  />


                </div>
                <div className={' d-flex flex-column col-12 gap-2'}>
                  <label>Addrese</label>

                  <input
                    ref={Addrese}
                   
                    placeholder='Addrese'
                  />


                </div>

                <div className={styles.third + ' d-flex flex-column col-12 gap-2'}>
                  <label>Message*</label>
                  <textarea ref={messageRef} type="Message" placeholder='Type your message...' />
                  <div className='d-flex '>
                    <button type="submit" className={styles.send + ' btn py-3 px-4 rounded-0 mt-2'}>Send</button>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='col-12 d-flex justify-content-center mb-5'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.9494711155876!2d-82.31911212459755!3d34.80721307288194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88582f44c1c93631%3A0x7f6b9fb259bc4b42!2s123%20Innovation%20Dr%2C%20Greenville%2C%20SC%2029607%2C%20USA!5e0!3m2!1sen!2seg!4v1746498649013!5m2!1sen!2seg" width="95%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}
