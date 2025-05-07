import React from 'react'
import styles from './index.module.css'
import logo from '../assets/header-logo2.png'
import teamdoctor from '../assets/xnytlodh.png'
import { Link } from 'react-router-dom'
import Formuserregister from '../Component/Formikuserregister'
export default function Registeruser() {
  return (
    <div className={styles.register + " d-flex"}>
      <div className='col-12 d-flex flex-grow-1  '>
        <div className=' col-md-6  d-none  d-md-flex flex-md-column justify-content-md-center align-items-md-center' id={styles.sectionimg}>
          <div className='mt-lg-5' id={styles.logodiv}>
            <img src={logo} alt="" />
          </div>
          <div className={styles.teamdoctor}>
            <img src={teamdoctor} alt="" />
          </div>

        </div>
        <div className='col-12 col-md-6 d-flex  align-items-center' id={styles.sectiondata}>
          <div className='container col-lg-9 d-flex flex-column justify-content-center align-items-baseline gap-2'>
            {/* <div className='bg-danger  d-flex flex-column align-items-start'>
               <h3>Sign Up</h3>
            <span>Enter details to create your account</span>
            </div> */}
 
            <div className='col-12'>
              <Formuserregister/>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
