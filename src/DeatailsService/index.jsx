import React, { useEffect } from 'react'
import styles from './index.module.css'
import { FaAngleRight, FaHandSparkles, FaPencil, FaStethoscope } from 'react-icons/fa6'
import { Link, useParams } from 'react-router-dom'
import { $domain, useData } from '../Store'
import { useRecoilValue } from 'recoil'
import { BiTestTube } from "react-icons/bi";
import { RiArrowRightUpLine } from 'react-icons/ri'
import { LiaClinicMedicalSolid } from "react-icons/lia";
import { ShowdetailsService } from '../Api/ShowdetailsService'
import { IoCheckmarkOutline } from 'react-icons/io5'
export default function DeatailsService() {
    const { detailsServie, setDetailServices } = useData()
    const domain = useRecoilValue($domain)
    const params = useParams()
    let id = params.id
    useEffect(() => {
        ShowdetailsService(domain, id).then((res) => {
            console.log("this is details service", res)
            setDetailServices(res)
        })
    }, [])
    return (
        <div className={styles.parent}>
            <div className='col-12 d-flex flex-column justify-content-between align-items-center' id={styles.section1}>
                <div id={styles.bgImg} className=' text-white d-flex justify-content-start align-items-center'>
                    <div className=' container ms-0 col-12 d-flex flex-column justify-content-start'>
                        <div className='  col-md-8  d-flex flex-column justify-content-center gap-2' id={styles.textdecor}>
                            <h2>{detailsServie.title}</h2>
                            <div className='d-flex align-items-center gap-1 '>
                                <Link className='nav-link'>Home</Link>
                                <FaAngleRight />
                                <Link to={'/service'} className='nav-link'>Services</Link>
                                <FaAngleRight />
                                <Link className='nav-link'>{detailsServie.title}</Link>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className='col-12 container d-flex flex-column gap-3' id={styles.detail}>
                <div className={styles.imgtop + " col-12"}>
                    <img src={domain + detailsServie?.img_card?.url} alt="" />
                </div>

                <div className='col-10 mt-3 d-flex flex-column gap-2'>
                    <h2>{detailsServie.details_servic?.title}</h2>
                    <p>{detailsServie.details_servic?.p1}</p>
                    <p>{detailsServie.details_servic?.p2}</p>
                </div>
                <div className='col-10 d-flex justify-content-between flex-wrap mt-3 gap-2 '>
                    <div className='col-lg-4 col-md-5 d-flex flex-column justify-content-end gap-2' id={styles.card}>
                        <div className={styles.icondiv + " d-flex justify-content-center align-items-center mb-1"}><FaHandSparkles /></div>
                        <h3>{detailsServie.details_servic?.Subtitle1}</h3>
                        <span>{detailsServie.details_servic?.subparagraph1}</span>
                        <div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-5 d-flex flex-column justify-content-end gap-2'>
                        <div className={styles.icondiv + " d-flex justify-content-center align-items-center mb-1"}><FaStethoscope /></div>
                        <h3>{detailsServie.details_servic?.Subtitle2}</h3>
                        <span>{detailsServie.details_servic?.subparagraph2}</span>
                        <div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-5 d-flex flex-column justify-content-end gap-2'>
                        <div className={styles.icondiv + " d-flex justify-content-center align-items-center mb-1"}><LiaClinicMedicalSolid /></div>
                        <h3>{detailsServie.details_servic?.Subtitle3}</h3>
                        <span>{detailsServie.details_servic?.subparagraph3}</span>
                        <div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-5  d-flex flex-column justify-content-end gap-2'>
                        <div className={styles.icondiv + " d-flex justify-content-center align-items-center mb-1"}><BiTestTube /></div>
                        <h3>{detailsServie.details_servic?.Subtitle4}</h3>
                        <span>{detailsServie.details_servic?.subparagraph4}</span>
                        <div>
                        </div>
                    </div>

                </div>
                <div className='col-11 d-flex align-items-center justify-content-between  gap-4 mb-3'id={styles.ullayer}>
                    <div className={styles.imgbenefit}>
                        <img src={domain + detailsServie.details_servic?.img[0].url} alt="" />

                    </div>
                    <div className='d-flex flex-column justify-content-between gap-2 '>
                        <h4 className='mt-2'>{detailsServie.details_servic?.benefits_title}</h4>
                        <div className='d-flex gap-2'>
                            <div className={styles.covermark + " d-flex justify-content-center align-items-center"}><IoCheckmarkOutline /></div>
                            <p>{detailsServie.details_servic?.li_1}</p>
                        </div>
                        <div className='d-flex gap-2'>
                            <div className={styles.covermark + " d-flex justify-content-center align-items-center"}><IoCheckmarkOutline /></div>
                            <p>{detailsServie.details_servic?.li_2}</p>
                        </div>
                        <div className='d-flex gap-2'>
                            <div className={styles.covermark + " d-flex justify-content-center align-items-center"}><IoCheckmarkOutline /></div>
                            <p>{detailsServie.details_servic?.li_3}</p>
                        </div>
                        <div className='d-flex gap-2'>
                            <div className={styles.covermark + " d-flex justify-content-center align-items-center"}><IoCheckmarkOutline /></div>
                            <p>{detailsServie.details_servic?.li_4}</p>
                        </div>
                    </div>
                </div>
                  <div className={styles.contactus + " col-12 my-3 mb-5   d-flex flex-column align-items-center justify-content-center gap-3"}>
                        <div className=' text-white rounded-5 border d-inline px-3 py-2'>
                          Call 123 234-567-890
                        </div>
                        <div className='text-center'>
                          <h4> Book now for accurate and </h4>
                          <h3>reliable test results</h3>
                        </div>
                
                        <Link to={'/Contactus'} className='nav-link btn rounded-5 px-4 py-3 text-white' id={styles.btngocontact}>Contact us Now  <RiArrowRightUpLine /></Link>
                      </div>
            </div>
        </div>
    )
}
