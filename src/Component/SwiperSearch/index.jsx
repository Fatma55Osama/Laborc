import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import { Pagination, Autoplay } from 'swiper/modules';
import boy from '../../assets/service2-img4.png'
import girldoctor from '../../assets/service2-img3.png'
import anbob from '../../assets/service2-img1.png'
import doctor from '../../assets/service2-img5.png'
import circlehand from '../../assets/service2-img2.png'
import { RiArrowRightUpLine } from "react-icons/ri";
import './index.scss'
import { Link } from 'react-router-dom';
import { $domain, useData } from '../../Store';
import { useRecoilValue } from 'recoil';
export default function SwiperSearch() {
    const { dataservice, setService } = useData()
    const domain = useRecoilValue($domain)

    const [swiper, setSwiper] = useState([{ img: anbob, neme: "Chemical Analysis" }, { img: circlehand, neme: "Chemical Analysis" }, { img: girldoctor, neme: "Chemical Analysis" }, { img: boy, neme: "Chemical Analysis" }, { img: doctor, neme: "Chemical Analysis" }])
    return (
        <div className='col-12'>
            <div className='col-12 swiper-container mb-5'>
                <>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={0}
                        centeredSlides={false}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        autoplay={{
                            delay: 5000, 
                            disableOnInteraction: false, 
                        }}
                        loop={true} 
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            576: {
                                slidesPerView: 1, 
                            },
                            768: {
                                slidesPerView: 2, 
                            },
                            1440: {
                                spaceBetween: 30,
                                slidesPerView: 4, 
                            }
                        }}
                    >
                        {
                            dataservice
                                .filter(el => el.Cover?.url)  
                                .map((el, index) => (
                                    <SwiperSlide key={index} className='position-relative imgswiper'>
                                        <img src={domain + el.Cover.url} alt="" width={294} height={381} />

                                        <div className='position-absolute top-0  z-3 div_blueicon h-100 col-12  justify-content-end'>
                                            <div className='parent_line_up d-flex flex-column justify-content-between align-items-end col-12'>
                                                <div className='border_line_up d-flex justify-content-center align-items-center'>
                                                    <div className='line_up d-flex justify-content-center align-items-center'>
                                                        <RiArrowRightUpLine className="white-icon" />
                                                    </div>
                                                </div>

                                                <div className='col-12 h-50 d-flex justify-content-center align-items-center'>
                                                    <div className='divimgcontent col-md-10 col-8 mt-lg-3 mb-lg-0 mb-md-5 rounded-5 d-flex flex-column'>
                                                        <Link to={`/servicedetalis/${el.documentId}`} className='nav-link rounded-3 p-3 d-flex flex-column gap-3'>
                                                            {el.title}<br />
                                                            <span>Read More <RiArrowRightUpLine className="white2-icon" /></span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                        }


                    </Swiper>

                </>
            </div>

            <div className="swiper-pagination">

            </div>

        </div>
    )
}
