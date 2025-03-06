import React from 'react'
import styles from './index.module.css'
import logo from '../../assets/span1.svg'
import doctor1 from '../../assets/values-img1.png'
import doctor2 from '../../assets/values-img2.png'
import doctor3 from '../../assets/values-img3.png'
import { IoMdCheckmark } from 'react-icons/io'

export default function Ourworks() {
    return (
        <div className={styles.div5 + " d-flex align-items-center"}>
            <div className={ styles.all + ' container col-10  d-flex'}>
                <div className={styles.halfone + ' col-6 d-flex flex-column ms-2 gap-3'}>
                    <div className='col-md-5 d-flex align-items-center gap-2'>
                        <img src={logo} alt="" />
                        <span className='mt-2'>Our Values</span>
                    </div>
                    <h1 className='col-11'>We work is conducted honest transparency.</h1>
                    <div className=' col-11 d-flex flex-column align-items-start gap-2'>
                        <div className='d-flex gap-2'>
                            <div className={styles.icons + " d-flex justify-content-center align-items-center"}><span><IoMdCheckmark /></span></div>
                            <div className={styles.textall}>
                                <h4>Excellence</h4>
                                <p>We are committed to achieving the highest levels of quality in everything we do</p>
                            </div>
                        </div>
                        <div className='d-flex gap-2'>
                            <div className={styles.icons + " d-flex justify-content-center align-items-center"}><span><IoMdCheckmark /></span></div>
                            <div className={styles.textall}>
                                <h4>Innovation</h4>
                                <p>We foster a culture of creativity and continuous improvement, embracing new ideas and technologies.</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between gap-2'>
                            <div className={styles.icons + " d-flex justify-content-center align-items-center"}><span><IoMdCheckmark /></span></div>
                            <div className={styles.textall}>
                                <h4>Collaboration</h4>
                                <p>We believe that the best results come from working together, both within our teams and with our clients and partners.</p>
                            </div>
                        </div>
                        <button className='py-3 px-3'>Book A Lab Visit</button>
                    </div>
                </div>
                <div className={styles.halftwo +   ' col-6  d-flex flex-column justify-content-between'}>
                    <div className={ styles.two +  ' d-flex justify-content-between g-5'}>
                        <img className={styles.twoimg} src={doctor1} width={300} alt="" />
                        <img className={styles.twoimg} src={doctor2} width={300} alt="" />
                    </div>
                    <img className='mt-4' src={doctor3} alt="" />
                </div>
            </div>
        </div>)
}
