import React from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'
import { RiArrowRightUpLine } from 'react-icons/ri'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from '../../assets/footer-logo1.png'
import { MdOutlineMail } from "react-icons/md";
import { PiMapPinLine } from "react-icons/pi";
import { MdOutlinePhone } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
export default function Footer() {
  return (
    <div className='col-12 parer'>

      <div className={styles.div6 + ' col-12 h-100  d-flex justify-content-center'}>
        <div className={ styles.parentparts +' container d-flex justify-content-between '}>
          <div className={styles.part1 + ' col-12 col-lg-6 col-md-12 part1  d-flex align-items-center'}>
            <h1>Ready to Innovate in Chemical & Metrical?</h1>
          </div>
          <div className={styles.part2 + ' col-lg-6  d-flex align-items-center justify-content-end'}>
            <Link to={"/Contactus"} className={styles.btn1 + ' btn rounded-5 py-3 px-4 py-md-3 px-md-4 me-4' }>Contact Us Now<RiArrowRightUpLine className={styles["black-icon"]} /></Link>
            <Link to={"/research"} className={styles.btn2 + ' btn rounded-5 py-3 px-4 py-md-3 px-md-4'}>Meet Lab Expert<RiArrowRightUpLine className={styles["white-icon"]} /></Link>
          </div>
        </div>
      </div>

      <div className={styles.div7 + ' col-12 d-flex justify-content-center '}>
        <div className={ styles.allsections +' container  d-flex justify-content-between align-items-center  gap-lg-5'}>
          <div className={styles.section1 + ' col-lg-3 '}>
            <img src={logo} width={163} alt="" />
            <p className='mt-4 col-md-11 col-lg-11'>At Laborc, we are dedicated to providing advanced laboratory & research services meet the highest standards of quality and precision.</p>
            <div className='col-12 d-flex gap-3 mt-4'>
              <div className={styles.bluecircle + ' d-flex justify-content-center align-items-center'}>
                <FaFacebookF className={styles.icons} />
              </div>
              <div className={styles.bluecircle + ' d-flex justify-content-center align-items-center'}>
                <IoLogoInstagram className={styles.icons} />
              </div>
              <div className={styles.bluecircle + ' d-flex justify-content-center align-items-center'}>
                <FaLinkedinIn className={styles.icons} />
              </div>
              <div className={styles.bluecircle + ' d-flex justify-content-center align-items-center'}>
                <FaXTwitter className={styles.icons} />
              </div>
            </div>
          </div>

          <div className={styles.section2 + "    "}>
            <ul className='d-flex flex-column gap-3'>
              <h2>About Link</h2>
              <li>Home</li>
              <li>About Us</li>
              <li>Our Services</li>
              <li>Contact US</li>
            </ul>
          </div>

          <div className={styles.section3 + "   "}>
            <ul className='d-flex flex-column gap-4'>
              <h2>Get in touch</h2>
              <li><MdOutlineMail className={styles.icon2+ " me-3"}/> Infolaborc@gmail.com</li>
              <li className='col-md-7 col-lg-7 d-flex'><GrLocation  className={styles.icon3+ " me-3"}/><span className='text-start ms-2 '>123 Innovation Drive,
                          Tech City, ST 12345, USA</span></li>
              <li><MdOutlinePhone className={styles.icon2 + " me-3"}/>123-456-7890</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}
