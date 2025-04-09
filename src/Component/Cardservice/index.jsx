import React from 'react'
import styles from './index.module.css'
import doctor from '../../assets/ServiceImg/service-img-01-770x570.jpg'
import { Link } from 'react-router-dom'
import { GoArrowUpRight } from "react-icons/go"

export default function Cardservice(props) {
    return (
        <div className=' col-12 container' id={styles.carddetail}>
            <div className='col-12 container bg-white py-4 d-flex flex-column gap-1 gap-md-3' id={styles.contentcard}>
                <div className='d-flex justify-content-center'>
                    <img className='' src={props.img} width={415} height={301} alt="" />
                </div>
                <div className='container-fluid d-flex  flex-column gap-md-3' id={styles.heightText}>
                    <div>
                        <span >{props.header}</span>
                        <Link className='nav-link' to={`/servicedetalis/${props.documentId}`}>
                           <h3> {props.title}</h3>
                        </Link>
                    </div>
                    <h5 className='col-12 border mt-3'></h5>
                    <p>{props.paragraph}</p>
                    <Link  to={`/servicedetalis/${props.documentId}`} className='col-12 nav-link d-flex justify-content-end align-items-end'>
                        <div className='  position-absolute ' id={styles.parentLogoLink}>
                            <div className='d-flex justify-content-center align-items-center' id={styles.logolink}><GoArrowUpRight /></div>
                        </div>
                    </Link>

                </div>

            </div>
        </div>
    )
}
