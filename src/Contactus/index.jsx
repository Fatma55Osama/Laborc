import React from 'react'
import styles from './index.module.css'
import Header from '../Component/Header'
import { Link } from 'react-router-dom'
import location from '../assets/contact-icon1.svg'
import phone from '../assets/contact-icon2.svg'
import email from '../assets/contact-icon3.svg'
import { FaAngleRight, FaRegClock } from 'react-icons/fa6'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import Footer from '../Component/Footer'
export default function Contactus() {
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

            <div className={styles.divhr + " me-4 d-flex flex-column gap-3 pb-4"}>
              <h2>Dr. Veronica Koelpin</h2>
              <h5>Lab Open</h5>
              <ul className='d-flex  gap-5'>
                <li><FaRegClock /><span>Monday - Friday</span></li>
                <li><FaRegClock /><span> 8:00 Am - 5:00 Pm</span></li>
              </ul>
            </div>

            <div className='d-flex flex-column align-items-start gap-4 mt-4'>
              <div className={styles.sec + ' d-flex align-items-center gap-3 '}>
                <div className={styles.icon + " d-flex justify-content-center align-items-center"}>
                  <img src={location} width={24} alt="" />
                </div>
                <div className='d-flex flex-column gap-2'>
                  <h4>My Location</h4>
                  <span>123 Innovation Drive,ST 12345, USA</span>
                </div>
              </div>
              <div className={styles.sec + ' d-flex align-items-center gap-3 '}>
                <div className={styles.icon + " d-flex justify-content-center align-items-center"}>
                  <img src={phone} width={24} alt="" />
                </div>
                <div className='d-flex flex-column gap-2'>
                  <h4>Office Number</h4>
                  <span>123-456-7890</span>
                </div>
              </div>
              <div className={styles.sec + ' d-flex align-items-center gap-3 '}>
                <div className={styles.icon + " d-flex justify-content-center align-items-center"}>
                  <img src={email} width={24} alt="" />
                </div>
                <div className='d-flex flex-column gap-2'>
                  <h4>My Mail</h4>
                  <span>Dr. Veronica Koelpin@gmail.com</span>
                </div>
              </div>
              <Link to={"/research"} className={styles.service + ' nav-link btn py-3 px-4 rounded-0 mt-2'}>Our Services</Link>
            </div>

          </div>
          <div className={styles.part2 + " col-6"}>
            <div className='container bg-white col-12 py-5' style={{ boxShadow: " 0px 4px 30px 0px rgba(0, 0, 0, 0.08)" }}>
              <form className='px-3 d-flex flex-column gap-4'>

                <div className={styles.first + ' d-flex justify-content-between gap-4'}>
                  <div className='d-flex flex-column col-6 gap-2'>
                    <label>First Name*</label>
                    <input type="text" placeholder='First Name' />
                  </div>
                  <div className='d-flex flex-column col-6 gap-2 pe-3'>
                    <label>Last Name*</label>
                    <input type="text" placeholder='Last Name' />
                  </div>
                </div>

                <div className={styles.second +   ' d-flex justify-content-between gap-4'}>
                  <div className='d-flex flex-column col-6 gap-2'>
                    <label>Email Address*</label>
                    <input type="email" placeholder='Email' />
                  </div>
                  <div className='d-flex flex-column col-6 gap-2 pe-3'>
                    <label>Phone Number*</label>
                    <input type="number" placeholder='Phone Number' />
                  </div>
                </div>

                <div className={styles.third +   ' d-flex flex-column col-12 gap-2'}>
                  <label>Message*</label>
                  <textarea type="Message" placeholder='Type your message...' />
                  <div className='d-flex '>
                    <Link className={styles.send + ' nav-link btn py-3 px-4 rounded-0 mt-2'}>Send</Link>

                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
