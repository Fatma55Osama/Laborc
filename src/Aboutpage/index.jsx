import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import Header from '../Component/Header'
import { useRecoilState, useRecoilValue } from 'recoil'
import { $active, $domain, useData } from '../Store'
import { FaAngleLeft, FaAngleRight, FaCheck } from 'react-icons/fa6'
import logo from '../assets/span1.svg'
import logoBlack from '../assets/span4.svg'
import farme from '../assets/about-page-sec1-img1.png'
import imgzgzg from '../assets/about-page-sec1-img2.png'
import laborc from '../assets/about-page-sec1-img3.png'
import serivce1 from '../assets/service4-icon1.svg'
import serivce2 from '../assets/service4-icon2.svg'
import serivce3 from '../assets/service4-icon3.svg'
import { RiArrowRightUpLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import image1 from '../assets/about1-image1.png'
import image2 from '../assets/about1-image2.png'
import image3 from '../assets/about1-image3.png'
import shap from '../assets/about1-shape.png'
import doctor1 from '../assets/values-img1.png'
import doctor2 from '../assets/values-img2.png'
import doctor3 from '../assets/values-img3.png'
import { Autoplay, FreeMode, Pagination, Navigation } from 'swiper/modules';
import { IoMdCheckmark } from 'react-icons/io'
import Video from '../Component/Video'
import Footer from '../Component/Footer'
import Ourworks from '../Component/Ourworks'

export default function Aboutpage() {
  const [active, setActive] = useRecoilState($active)
  const [seviceLab, setSeviceLab] = useState([{ id: 1, img: serivce1, label: "Clinical Chemistry", text: "Analyze blood, urine, and other body fluids to assess organ function & detect conditions like diabetes kidney disease." }, { id: 2, img: serivce2, label: "Hematolog", text: "Examine blood samples to diagnose anemia, clotting disorders, and  blood cancers." }, { id: 3, img: serivce3, label: "Microbiology", text: "Study tissue samples to diagnose cancers and other diseases at the <br/> cellular level." }])
  const { dataservice } = useData()
  const domain = useRecoilValue($domain)
  const [filterservice, setfilterservice] = useState([])
  useEffect(() => {
    let copyfilter = dataservice.filter((el) => { return el.onmainpage })
    setfilterservice(copyfilter)
  }, [dataservice])
  return (
    <div className={styles.alldivs + " col-12  d-flex flex-column "}>
      <div className={styles.divimg + " col-12 d-flex flex-column  "}>
        <div className='container d-flex flex-column justify-content-center h-100 flex-grow-1 '>
          <div className={styles.textdiv + ' col-12  d-flex flex-column justify-content-center gap-2 '}>
            <h1>About Laborc</h1>
            <span className='d-flex flex-row align-items-center gap-1'><Link to={"/"} className='nav-link'>Home</Link>  <FaAngleRight className='iconfaright' /> <Link to={"/about"} className='nav-link'> About Us</Link></span>
          </div>
        </div>

      </div>

      <div className={styles.aboutlaborc + 'col-12  d-flex justify-content-center '}>
        <div className={styles.content + '  container d-flex flex-wrap '}>
          <div className={styles.part1 + '  col-8 d-flex flex-column gap-3    '}>
            <div className={styles.logodiv + '  col-lg-3  d-flex align-items-center gap-2'}>
              <img src={logo} width={25} alt="" />
              <span className='mt-2'>About Laborc</span>
            </div>
            <h1 className=' col-lg-9 col-md-10 mt-lg-0 mt-md-3' data-aos="fade-up" data-aos-offset="13" data-aos-delay="450">Advancing Health Through Innovative Diagnostic Solutions </h1>
            <div className={styles.centersecondimg + ' d-flex flex-row justify-content-between'}>
              <div className={styles.imgandtext + ' col-5  d-flex flex-column mt-5 gap-2'}>
                <img src={farme} width={361} alt="" />
                <span className='text-center'>AGRODIAGNOSTICS</span>
              </div>
              <div className={styles.part2 + '   position-relative d-flex flex-column text-center gap-3 '}>
                <img src={imgzgzg} width={446} alt="" />
                <span>LABORATORY</span>
                <div className={styles.boxs + ' position-absolute d-flex flex-column  justify-content-center'}>
                  <h1>50+</h1>
                  <span>LAB EXPERTS</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.part3 + ' col-4  d-flex justify-content-end mt-5 '}>
            <div className='col-10 d-flex flex-column gap-5 align-items-start'>
              <p className='m-0' data-aos="fade-up" data-aos-offset="13" data-aos-delay="450">
                With a focus on accuracy and care, Laborc is dedicated to advancing medical diagnostics and public health. We work closely with patients, clinics, and researchers to provide reliable testing and insights that support healthier communities now and in the future.</p>
              <Link className='nav-link' to={'/service'} data-aos="fade-up" data-aos-offset="13" data-aos-delay="400">  <button className='py-3 px-3'>About Laborc</button> </Link>
              <div className={styles.imgandtext + " d-flex flex-column text-center gap-3"}>
                <img src={laborc} width={321} alt="" />
                <span>HEALTH</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className={styles.div3 + ' col-12  d-flex justify-content-center'}>
        <div className='container  d-flex flex-column justify-content-center gap-5 '>
          <div className={styles.section1 + "  d-flex flex-row flex-wrap justify-content-between"}>
            <div className='col-lg-8  d-flex flex-column gap-3 py-4'>
              <div className={styles.logodiv + " col-12 col-md-4 col-lg-4 d-flex align-items-center gap-2"}>
                <img src={logoBlack} width={25} alt="" />
                <span className='mt-2'>Our Service</span>
              </div>
              <h1 className={'col-lg-9 col-md-11'} data-aos="fade-right"data-aos-offset="10" data-aos-delay="450">Comprehensive Testing for Every Health Need</h1>
            </div>
            {/* <div className={styles.swiperbutton + '  d-flex align-items-center  justify-content-between gap-3 '}>
              <button className={styles["custom-prev"]}> <FaAngleLeft /></button>
              <button className={styles["custom-next"]}><FaAngleRight /></button>
            </div> */}

          </div>
          <div className={styles.section2 + " mx-2 mt-5 pb-4"}>
            <>
              <Swiper
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  }
                }}
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                loop={true}
                loopFillGroupWithBlank={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: `.${styles["custom-next"]}`,
                  prevEl: `.${styles["custom-prev"]}`,
                }}
                grabCursor={true}
                touchEventsTarget="container"
                modules={[FreeMode, Pagination, Autoplay, Navigation]}
                className="mySwiper"
              >
                {
                  filterservice.map((el, index) => {
                    return (
                      <SwiperSlide key={el.documentId} className='col-4 bg-white'>
                        <div className={styles.contentdivwhite + ' container col-11 py-4 gap-3 d-flex flex-column'}>
                          <div className={styles.icon + " d-flex align-items-center justify-content-center"}>
                            <img src={domain+el.icon.url} width={25} alt="" />
                          </div>
                          <h4 className='m-0'>{el.title}</h4>
                          <p className="m-0">{el.paragraph}</p>
                          <Link to={`/servicedetalis/${el.documentId}`} className={styles.Link + " nav-link"}>Read More <RiArrowRightUpLine /></Link>

                        </div>
                      </SwiperSlide>
                    )
                  })
                }


              </Swiper>
            </>

          </div>
        </div>
      </div>

      <div className={styles.div4 + " col-12  d-flex justify-content-center align-items-center"}>
        <div className='container h-100 '>
          <div className='row h-100'>
            <div className={styles.halfrist + ' col-6  d-flex flex-row flex-wrap justify-content-center position-relative mt-5'} style={{ minHeight: 700 }}  >
              <div className={styles.divimage1}>
                <img src={image1} width={270} alt="" />
              </div>
              <div className={styles.divimage2}>
                <img src={image2} width={380} alt="" />
              </div>
              <div className={styles.divimage3}>
                <img src={image3} width={400} alt="" />
              </div>
              <div className={styles.divimage4}>
                <img src={shap} width={182} alt="" />
              </div>
            </div>
            <div className={styles.halfsecond + ' col-6  d-flex'}>
              <div className={styles.ourmission + ' container col-11 d-flex flex-column justify-content-center align-items-start  me-2 gap-2 mb-5'}>
                <div className='col-md-5 d-flex align-items-center gap-2'>
                  <img src={logo} width={25} alt="" />
                  <span className='mt-2'>Our Mission & Vision</span>
                </div>
                <h1  data-aos="fade-right"data-aos-offset="10" data-aos-delay="450">Empowering Scientific Discovery Laborc Future.</h1>
                <p  data-aos="fade-right"data-aos-offset="10" data-aos-delay="450">At Laborc, our mission is to empower the scientific community by delivering accurate, reliable, and timely results. We strive to enhance research capabilities, drive innovation, contribute to the betterment of society through our unwavering commitment to quality precision.</p>
                <p  data-aos="fade-right"data-aos-offset="10" data-aos-delay="450"> We envision a future where scientific advancements shape a better world. Our goal is to be at the forefront of this transformation, providing the tools, knowledge, and expertise necessary for groundbreaking discoveries.</p>
                <Link className='nav-link' to={'/research'}  data-aos="fade-left"data-aos-offset="10" data-aos-delay="450">  <button className='py-3 px-3'>About Laborc</button> </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Ourworks />
      <Video />
    </div>
  )
}
