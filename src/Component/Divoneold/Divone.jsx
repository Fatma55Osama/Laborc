import React from 'react'
import './Divone.scss'
import logo from '../../assets/header-logo2.png'
import { Link } from 'react-router-dom'
import img1 from '../../assets/about2-image.png'
import logo2 from '../../assets/span1.svg'
import doctor1 from '../../assets/about2-smoll-image.png'
export default function Divone() {
  return (
    <div className='col-12'>
         <div className='col-12 bg-img1'>
                <div className='col-12 bg-filter'>
                  <div className='filter-black col-12'>
        
        
                    {/*Start nav */}
                    <div className='col-12  navpar py-3  d-flex justify-content-center  align-items-center'>
                      <div className='col-8 container bg-white py-2 rounded-5 d-flex justify-content-between align-items-center '>
                        <img className='ms-5' src={logo} width="135px" height="35px" alt="" />
                        <div className='col-6 me-5  '>
                          <ul className='d-flex justify-content-between align-items-center align-content-center mt-2'>
                            <Link className='nav-link' to="/">Home</Link>
                            <Link className='nav-link' to="about">About Us</Link>
                            <Link className='nav-link' to="Contactus">Contact </Link>
                          </ul>
        
                        </div>
                      </div>
                    </div>
                    {/* end nav */}
        
                    <div className='col-8   div2 flex-grow-1  d-flex flex-column justify-content-center'>
                      <div className='col-7 mb-4'> <h1>
                        Research & Verify
                        <span> Laboratory </span>
                        for Testing
                      </h1></div>
                      <div className='col-6 paragrap'>
                        <p>Labortech is modern laboratory services Delivering newer flows by their place website is the first impression.</p>
                      </div>
                      <div className='col-6  divbtn mt-5 '>
                        <button className='btn1 py-2 px-5 rounded-5 '> <Link className='btn1-link' to="about">More About</Link></button>
                        <button className='btn2 py-2 px-4 rounded-5 ms-4'> <Link className='btn2-link' to="Contactus">Book Appointment</Link></button>
                      </div>
                    </div>
        
                  </div>
                </div>
              </div>
    </div>
  )
}
