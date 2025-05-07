import React from 'react'
import styles from './index.module.css'
import logo from '../assets/header-logo2.png'
import teamdoctor from '../assets/xnytlodh.png'
import { Link } from 'react-router-dom'
import Formikuserlogin from '../Component/Formikuserlogin'
export default function Loginuser() {
  return (
    <div>
    <div className={styles.login + " d-flex"}>
         <div className='col-12 d-flex flex-grow-1  '>
           <div className=' col-md-6  d-none  d-md-flex flex-md-column justify-content-md-center align-items-md-center ' id={styles.sectionimg}>
             <div className='mt-lg-5'>
               <img src={logo} alt="" />
             </div>
             <div className={styles.teamdoctor}>
               <img src={teamdoctor} alt="" />
             </div>
   
           </div>
           <div className='col-12 col-md-6 d-flex  align-items-center' id={styles.sectiondata}>
             <div className='container col-lg-9 d-flex flex-column justify-content-center align-items-baseline gap-2 '>
               {/* <div>
                  <h3>Welcome to Laborc</h3>
                  <p className='m-0 ms-1 mt-1'>Need an account?<Link to={"/registerAdmin"} className='text-decoration-none '>Sign Up</Link> </p>
               </div> */}
              
               <div className='col-12'>
                 <Formikuserlogin/>
               </div>
             </div>
   
           </div>
         </div>
       </div>
 </div>
  )
}
