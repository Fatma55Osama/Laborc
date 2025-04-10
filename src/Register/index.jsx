import React from 'react'
import styles from './index.module.css'
import logo from '../assets/header-logo2.png'
import teamdoctor from '../assets/bg-02.png'
import FormRegister from '../Component/FromRegister'
import { Link } from 'react-router-dom'
export default function Register() {
  return (
    <div className={styles.register + " d-flex"}>
      <div className='col-12 d-flex flex-grow-1  '>
        <div className=' col-6 d-flex flex-column justify-content-center align-items-center gap-5' id={styles.sectionimg}>
          <div className='mt-5'>
            <img src={logo} alt="" />
          </div>
          <div className={styles.teamdoctor}>
            <img src={teamdoctor} alt="" />
          </div>

        </div>
        <div className='col-6 d-flex  align-items-center' id={styles.sectiondata}>
          <div className='container col-9 d-flex flex-column gap-2 '>
            <div>
               <h3>Sign Up</h3>
            <span>Enter details to create your account</span>
            </div>
           
            <div className='col-12'>
              <FormRegister/>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
