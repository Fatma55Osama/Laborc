import React, { useState } from 'react'
import styles from './index.module.css'
import Header from '../Component/Header'
import { useRecoilState } from 'recoil'
import { $active } from '../Store'
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
  return (
    <div className={styles.alldivs + " col-12  d-flex flex-column "}>
      <div className={styles.divimg + " col-12 d-flex flex-column  "}>
        <Header />
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
            <h1 className=' col-lg-9 col-md-10 mt-lg-0 mt-md-3'>Pioneering Solutions at the Intersection Laborc </h1>
            <div className={styles.centersecondimg + ' d-flex flex-row justify-content-between'}>
              <div className={styles.imgandtext + ' col-5  d-flex flex-column mt-5 gap-2'}>
                <img src={farme} width={361} alt="" />
                <span className='text-center'>AGRICULTURE</span>
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
              <p className='m-0'>With a commitment to sustainability and innovation, Laborc stands at the forefront of agricultural and health research. We collaborate with farmers, agribusinesses, healthcare providers, and public institutions to deliver impactful research that addresses the challenges of today and tomorrow.</p>
              <button className='py-3 px-3'>About Laborc</button>
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
              <h1 className={'col-lg-9 col-md-11'}>Comprehensive Testing for Every Health Need</h1>
            </div>
            <div className={styles.swiperbutton + '  d-flex align-items-center  justify-content-between gap-3 '}>
              <button className={styles["custom-prev"]}> <FaAngleLeft /></button>
              <button className={styles["custom-next"]}><FaAngleRight /></button>
            </div>

          </div>
          <div className={styles.section2 + " mx-2 mt-5 pb-4"}>
            <>
              <Swiper
               breakpoints={{
                0: { // شاشات التليفون
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: { // شاشات التابلت
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: { // الشاشات الكبيرة
                  slidesPerView: 3,
                  spaceBetween: 30,
                }
              }}
                slidesPerView={3} // عدد العناصر الظاهرة
                spaceBetween={30}  // المسافة بين العناصر
                freeMode={true}    // تفعيل الحركة الحرة
                loop={true}
                loopFillGroupWithBlank={true}
                autoplay={{
                  delay: 5000,  // تشغيل تلقائي كل 2 ثانية
                  disableOnInteraction: false, // لا يتوقف عند تفاعل المستخدم
                }}
                navigation={{
                  nextEl: `.${styles["custom-next"]}`,
                  prevEl: `.${styles["custom-prev"]}`,
                }}  // إضافة أسهم التحكم اليمين والشمال
                grabCursor={true}  // تفعيل المؤشر اليدوي عند التحريك
                touchEventsTarget="container" // تحسين التفاعل باللمس
                modules={[FreeMode, Pagination, Autoplay, Navigation]}
                className="mySwiper"
              >
                {
                  seviceLab.map((el, index) => {
                    return (
                      <SwiperSlide key={el.id} className='col-4 bg-white'>
                        <div className={styles.contentdivwhite + ' container col-11 py-4 gap-3 d-flex flex-column'}>
                          <div className={styles.icon + " d-flex align-items-center justify-content-center"}>
                            <img src={el.img} width={25} alt="" />
                          </div>
                          <h4 className='m-0'>{el.label}</h4>
                          <p className="m-0">{el.text}</p>
                          <Link className={styles.Link + " nav-link"}>Read More <RiArrowRightUpLine /></Link>

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
                <h1>Empowering Scientific Discovery Laborc Future.</h1>
                <p>At Laborc, our mission is to empower the scientific community by delivering accurate, reliable, and timely results. We strive to enhance research capabilities, drive innovation, contribute to the betterment of society through our unwavering commitment to quality precision.</p>
                <p> We envision a future where scientific advancements shape a better world. Our goal is to be at the forefront of this transformation, providing the tools, knowledge, and expertise necessary for groundbreaking discoveries.</p>
               <button className='py-3 px-3'>About Laborc</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={styles.div5 + " d-flex align-items-center"}>
        <div className='container col-10  d-flex'>
          <div className='col-6 d-flex flex-column ms-2 gap-3'>
            <div className='col-5 d-flex align-items-center gap-2'>
              <img src={logo} alt="" />
              <span className='mt-2'>Our Values</span>
            </div>
              <h1 className='col-11'>We work is conducted honest transparency.</h1>
              <div className= ' col-11 d-flex flex-column align-items-start gap-2'>
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
          <div className='col-6  d-flex flex-column justify-content-between'>
            <div className='d-flex justify-content-between g-5'>
              <img src={doctor1} width={300} alt="" />
              <img src={doctor2} width={300} alt="" />
            </div>
            <img className='mt-4' src={doctor3} alt="" />
          </div>
        </div>
      </div> */}
      <Ourworks/>
       <Video/>
       <Footer/>
    </div>
  )
}
