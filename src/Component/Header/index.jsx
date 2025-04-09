import React, { useEffect, useState } from 'react'
import './index.scss'
import logo from '../../assets/header-logo2.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faL } from '@fortawesome/free-solid-svg-icons'
import logoblue from '../../assets/footer-logo1.png'
import { FaAngleDown, FaArrowRightLong, FaFacebookF, FaLinkedinIn, FaXmark, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { MdOutlineMail, MdOutlinePhone } from 'react-icons/md'
import { PiMapPinLine } from 'react-icons/pi'
import { IoLogoInstagram } from 'react-icons/io5'
import { useRecoilState } from 'recoil'
import { $active } from '../../Store'
import { Accordion } from 'react-bootstrap'
export default function Header() {
  const [modal, setModal] = useState(false)
  const [active, setActive] = useRecoilState($active)
  return (
    <div className='col-12 '>
      {/*Start nav */}
      <div className='col-12  navpar  py-lg-3   d-flex justify-content-center  align-items-center'>
        <div className='nav_rounded col-12 col-lg-10 col-md-12  bg-white py-lg-3 d-flex justify-content-between px-lg-5 align-items-center '>
          <img className='me-5 me-md-5 me-lg-5 d-none d-md-none d-lg-flex ' src={logo} width="135px" height="35px" alt="" />
          <img className='d-flex d-md-flex d-lg-none' src={logoblue} width={120} alt="" />
          <div className='border_icon d-flex d-md-flex d-lg-none' onClick={() => setModal(true)}>

            <FontAwesomeIcon icon={faBarsStaggered} className='icon_fontAwesome ' />
          </div>
          {
            modal && (
              <div className='modal col-12 d-flex justify-content-center align-items-center ' >
                <div className='col-12  d-flex justify-content-center  '>
                  <div className='col-11 d-flex justify-content-between align-items-center mt-3'>
                    <img className='d-flex d-md-flex d-lg-none' src={logoblue} width={130} alt="" />
                    <FaXmark className='FaXmark' onClick={() => setModal(false)} />
                  </div>

                </div>
                <div className='col-12  d-flex flex-column justify-content-center align-items-center'>
                  <div className="section4 col-11">
                    <ul className='d-flex flex-column gap-3'>
                      <Link className='nav-link' to="/">Home</Link>
                      <Link className='nav-link' to="/about">About Us</Link>
                      <Link className='nav-link' to="/research">Research</Link>
                      <Link className='nav-link' to="/service">Services</Link>
                      <Accordion  className='col-12'>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>Pages</Accordion.Header>
                          <Accordion.Body>
                            <li> <Link to={'/faq'} className='nav-link'>FAQ's</Link></li>
                            <li> <Link to={'/team'} className='nav-link'>Team</Link></li>
                            <li> <Link to={'*'} className='nav-link'>Error 404</Link></li>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                      <Link className='nav-link' to="/Contactus">Contact </Link>
                    </ul>
                    <Link className='GetQuote nav-link col-7 col-md-3 mt-3 rounded-5 py-2 px-3 ' to="Contactus"> Get A Quote <FaArrowRightLong /></Link>
                  </div>

                  <div className="section5 col-11">
                    <ul className='d-flex flex-column gap-4'>
                      <h2>Get in touch</h2>
                      <li><MdOutlineMail className="icon2 me-3" /> Infolaborc@gmail.com</li>
                      <li className='col-md-7 col-lg-7 d-flex'><PiMapPinLine className="icon3 me-3" /><span className='text-start ms-2 '>123 Innovation Drive,
                        Tech City, ST 12345, USA</span></li>
                      <li><MdOutlinePhone className="icon2 me-3" />123-456-7890</li>
                    </ul>
                  </div>

                  <div className='section6 col-11 mb-5'>
                    <h2>Our Location</h2>
                    <div className=' col-8 d-flex justify-content-between'>
                      <div className='bluecircle d-flex justify-content-center align-items-center'>
                        <FaLinkedinIn className="icons" />
                      </div>
                      <div className='bluecircle d-flex justify-content-center align-items-center'>
                        <FaXTwitter className="icons" />
                      </div>
                      <div className='bluecircle d-flex justify-content-center align-items-center'>
                        <FaYoutube className="icons" />
                      </div>
                      <div className='bluecircle d-flex justify-content-center align-items-center'>
                        <IoLogoInstagram className="icons" />
                      </div>
                    </div>

                  </div>
                </div>

              </div>

            )
          }
          <div className='col-lg-6  navpar_white  '>
            <ul className='d-flex justify-content-between align-items-center align-content-center mt-2'>
              <Link className='nav-link' to="/">Home</Link>
              <Link className='nav-link' to="/about">About Us</Link>
              <Link className='nav-link' to="/research">Research</Link>
              <Link className='nav-link' to="/service">Services</Link>
              <span className='pages-container'>Pages <FaAngleDown />
                <ul className='dropdown-menu pagesmenu'>
                  <li> <Link to={'/faq'} className='nav-link'>FAQ's</Link></li>
                  <li> <Link to={'/team'} className='nav-link'>Team</Link></li>
                  <li> <Link to={'*'} className='nav-link'>Error 404</Link></li>
                </ul>
              </span>
              <Link className='nav-link' to={"/blog"}>Blog </Link>

              <Link className='nav-link' to="/Contactus">Contact </Link>
            </ul>

          </div>
        </div>
      </div>
      {/* end nav */}
    </div>
  )
}
