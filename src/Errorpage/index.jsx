import React from 'react'
import styles from './index.module.css'
import imgerr from '../assets/error.png'
import { Link } from 'react-router-dom'
export default function Errorpage() {
  return (
    <div className={styles.err}>
      <div className={"container d-flex flex-column align-items-center justify-content-center gap-4 "}>
        <img src={imgerr} width={600} alt="" />
       <h1>Sorry! Page Not Found!</h1>
       <p className=' col-lg-4 col-md-7 text-center'>Sorry, the page you are looking for doesn’t exist or
       has been moved. Here are some helpful links.</p>
       <Link to={'/'} className={styles.backhome + ' nav-link btn py-3 px-3 rounded-0'}>Back To Home</Link>
      </div>
    </div>
  )
}
