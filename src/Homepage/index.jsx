import React, { useEffect, useState } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import img1 from '../assets/about2-image.png'
import logo2 from '../assets/span1.svg'
import doctor1 from '../assets/about2-smoll-image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons'
import hero2shap from '../../src/assets/hero2-shape2.png'
import circle1 from '../assets/hero2-shape1.png'
import circle2 from '../assets/hero2-shape3.png'
import leftimg from '../assets/hero2-main-image.png'
import line from '../assets/hero2-shape4.png'
import reaserch from '../assets/solution-bottom-icon1.svg'
import flower from '../assets/solution-bottom-icon2.svg'
import books from '../assets/solution-bottom-icon3.svg'
import solution1 from '../assets/solution1-icon1.svg'
import solution2 from '../assets/solution1-icon2.svg'
import solution3 from '../assets/solution1-icon3.svg'
import solution4 from '../assets/solution1-icon4.svg'
import solution5 from '../assets/solution1-icon5.svg'
import solution6 from '../assets/solution1-icon6.svg'
import video from '../assets/video-area1-bg.jpg'
import SwiperSearch from '../Component/SwiperSearch'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { useRecoilState } from 'recoil'
import { $blocks, $isplay, useResearch } from '../Store'
import Video from '../Component/Video'
import ShowPartBlogs from '../Component/ShowPartBlogs'
import ShowPartTeams from '../Component/ShowPartTeams'
export default function Homepage() {
  const [isplaying, setIsplaying] = useRecoilState($isplay)
  const [blocks, setBlocks] = useRecoilState($blocks)
  const [modal, setModal] = useState(false)
  const { research } = useResearch()
  return (
    <div className='parentdiv col-12'>
      <div className='col-12 bg-img'>
        <div className='col-12 d-flex flex-column  gap-3 '>
          <div className='col-12   mt-5 d-flex flex-column contentdiv  justify-content-between'>
            <div className='col-12 animatup_down mb-lg-5 '>
              <img className='animationimg' src={hero2shap} alt="" />
            </div>
            <div className='col-12 animatup_down d-flex flex-row justify-content-between align-items-center '>
              <img className='animationimg' src={circle1} alt="" />
              <img className='imgline animationimg' src={line} alt="" />
              <img className='animationimg' src={circle2} alt="" />
            </div>
            <div className=' col-12 containersection1 container div2  d-flex justify-content-center   '>
              <div className='col-lg-7    d-flex flex-column align-items-center  '>
                <div className='container container_contantdiv col-11  d-flex justify-content-center '>
                  <div className='col-lg-6 col-md-10 mt-lg-5 mt-md-5 div2 right_write  flex-grow-1  d-flex flex-column justify-content-center gap-2'>
                    <div className='col-1 col-lg-12 ms-2 ms-lg-0  ms-md-4 col-md-8 mb-lg-4' data-aos="fade-up" data-aos-offset="10" data-aos-delay="450" > <h1>
                      Empowering Science
                      Through Rigorous
                      Laboratory Research
                    </h1></div>
                    <div className='col-11 col-lg-11 ms-2 ms-lg-0 ms-md-4 col-md-10 paragrap' data-aos="fade-up" data-aos-offset="10" data-aos-delay="300" >
                      <p>At Laborc, we are dedicated to pushing the boundaries of scientific discovery. Our
                        team of experts combines technology with meticulous research to deliver precise.

                      </p>
                    </div>

                    <div className='col-lg-10 ms-2 ms-lg-0 ms-md-4 divbtn mt-lg-5 mt-md-3 ' data-aos="fade-left" data-aos-offset="10" data-aos-delay="300" >
                      <Link className='btn1-link btn1 py-3 px-3 py-lg-3 py-md-3 px-md-3 px-lg-3 rounded-5 ' to={"/Contactus"}>Book A Lab Visit</Link>
                      <Link className='btn2-link btn2  py-3 px-3 py-lg-3 py-md-3 px-md-3 px-lg-3 rounded-5 ms-4' to={"/service"}>Tests & Services</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='leftimg  col-lg-4 col-md-12'>
                <img className='' src={leftimg} width={520} height={581} alt="" />
              </div>
            </div>

          </div>
  
        </div>
      </div>
{/* data-aos="fade-up"
                    data-aos-offset="10" data-aos-delay={`${index * 10000}` */}
      <div className='col-12 divabout d-flex align-content-center justify-content-center align-items-center'>
        <div className=' container  d-flex Allparts py-3 d-flex  justify-content-between '>
          <div className='part1 col-5 '>
            <img src={img1} width={570} height={530} alt="" />
          </div>
          <div className='part2  col-lg-6 d-flex flex-column   align-items-baseline mt-lg-3 gap-3 gap-md-4 gap-lg-4'>
            <div className='col-7 col-lg-4 col-md-4 unit1  d-flex justify-content-around align-items-center'>
              <img src={logo2} width={25} height={25} alt="" />
              <span className='mt-1 me-lg-5 me-md-5' >About Laborc</span>
            </div>
            <div className='col-lg-12 col-md-8 unit2'  data-aos="fade-left" data-aos-offset="10" data-aos-delay="280">
              <h2>The Laborc Mission and Our
                Journey Toward Excellence</h2>
            </div>
            <div className='col-12 '  data-aos="fade-left" data-aos-offset="10" data-aos-delay="280">  <p>At Laborc, we are more than just a laboratory—we are pioneers in the field of scientific research. With years of experience and a team of dedicated professionals, we have established ourselves as a leading provider of innovative laboratory services.
            </p></div>

            <div className='d-flex flex-row unit3 d-flex align-items-end '  data-aos="fade-left" data-aos-offset="10" data-aos-delay="280">
              <div><img src={doctor1} alt="" /></div>
              <div className='unit4'>
                <ul className=' h-100 d-flex flex-column justify-content-around gap-2'>
                  <li><span><FontAwesomeIcon icon={faCheck} style={{ color: "#ffffff", width: "20px" }} /></span>  Health, Wellness and Insurance</li>
                  <li><span><FontAwesomeIcon icon={faCheck} style={{ color: "#ffffff", width: "20px" }} /></span>  97% Customer Satisfaction</li>
                  <li><span><FontAwesomeIcon icon={faCheck} style={{ color: "#ffffff", width: "20px" }} /></span>Family Scholarship Program</li>
                </ul>
              </div>
            </div>
            <Link to={"/research"} className='button nav-link py-3 px-4 mt-0 rounded-5 '  data-aos="fade-left" data-aos-offset="10" data-aos-delay="280">Discover More</Link>

          </div>
        </div>
      </div>

      <ShowPartBlogs blogsCount={4} />
      <div className='col-12 div4  d-flex '>
        <div className='container  circlediv  d-flex flex-column justify-content-center align-items-center flex-grow-1 py-5 '>

          <div className='  unit1 pb-2 d-flex justify-content-around align-items-center mb-2'>
            <img src={logo2} width={25} alt="" />
            <span className='mt-1  fs-4' >Research</span>
          </div>

          <div className=' col-lg-7 col-md-9 text-center mb-lg-5 '>
            <h1>Advanced Chemical & Metrical
              Solutions Tailored to Your Industry’s</h1>
          </div>

          <div className=' circl1  d-flex align-items-center justify-content-center'>

          </div>
          <div className=' circl2  d-flex justify-content-center align-items-center'>
            <div className='circl3 '></div>

          </div>
            <div  className='col-12 bigdiv mt-lg-5 d-flex align-items-center h-100'>

              <div className='col-12 col-lg-6 col-md-6 right_part1 h-75 d-flex flex-column justify-content-between'>

                <div className='section1 col-lg-8 col-md-10 d-flex text-end justify-content-around align-items-center' data-aos="fade-down" data-aos-offset="10" data-aos-delay="280">
                  {research.map((el,index)=>{
                    if(index==0){
                      return(
                        <Link to={`/Deatailesresearch/${el.documentId}`} className='nav-link'> <h3 className='ms-lg-5'>{el.title}</h3></Link>
                      )
                    }
                    return null
                  })}
                 
                  <div className='bluedivcircle d-flex justify-content-center align-items-center'>
                    <img src={solution1} width={50} alt="" />
                  </div>
                </div>

                <div className='col-lg-8  col-md-12 section2 d-flex text-end justify-content-around align-items-center'data-aos="fade-down" data-aos-offset="10" data-aos-delay="280">
                {research.map((el,index)=>{
                    if(index==1){
                      return(
                        <Link to={`/Deatailesresearch/${el.documentId}`} className='nav-link'> <h3 >{el.title}</h3></Link>
                      )
                    }
                    return null
                  })}
                  <div className='blackdivcircle d-flex justify-content-center align-items-center'>
                    <img src={solution2} width={50} alt="" />
                  </div>
                </div>

                <div className='col-lg-8 col-md-12 section3 text-end d-flex justify-content-around align-items-center 'data-aos="fade-down" data-aos-offset="10" data-aos-delay="280">
                {research.map((el,index)=>{
                    if(index==2){
                      return(
                        <Link to={`/Deatailesresearch/${el.documentId}`} className='nav-link'> <h3 className='ms-lg-5'>{el.title}</h3></Link>

                      )
                    }
                    return null
                  })}
                  <div className='bluedivcircle d-flex justify-content-center align-items-center'>
                    <img src={solution3} width={50} alt="" />
                  </div>
                </div>

              </div>

              <div className='col-12 col-lg-6 col-md-6 left_part2 h-75 d-flex flex-column align-items-center justify-content-between'>

                <div className='col-lg-7 section4 d-flex justify-content-around align-items-center'  data-aos="fade-down" data-aos-offset="10" data-aos-delay="280">
                  <div className='blackdivcircle d-flex justify-content-center align-items-center'>
                    <img src={solution4} width={50} alt="" />
                  </div>
                  {research.map((el,index)=>{
                    if(index==3){
                      return(
                      <Link to={`/Deatailesresearch/${el.documentId}`} className='nav-link'>  <h3 className='ms-lg-3'>{el.title}</h3> </Link> 
                      )
                    }
                    return null
                  })}
                </div>

                <div className='col-lg-8 col-md-11 section5 d-flex align-items-center justify-content-between gap-lg-3' data-aos="fade-down" data-aos-offset="10" data-aos-delay="280">
                  <div className='bluedivcircle col-6 d-flex justify-content-center align-items-center'>
                    <img src={solution5} width={50} alt="" />
                  </div>
                  {research.map((el,index)=>{
                    if(index==4){
                      return(
                        <Link to={`/Deatailesresearch/${el.documentId}`} className='nav-link'> <h3>{el.title}</h3></Link>
                      )
                    }
                    return null
                  })}
                </div>

                <div className='col-lg-8 col-md-11 section6 y d-flex justify-content-between align-items-center gap-lg-3' data-aos="fade-down" data-aos-offset="10" data-aos-delay="280">
                  <div className='blackdivcircle col-6 d-flex justify-content-center align-items-center'>
                    <img src={solution6} width={50} alt="" />
                  </div>
                  {research.map((el,index)=>{
                    if(index==5){
                      return(
                        <Link to={`/Deatailesresearch/${el.documentId}`} className='nav-link'> <h3 className='me-lg-5'>{el.title}</h3></Link>
                      )
                    }
                    return null
                  })}
                </div>

              </div>
            </div>
     
        </div>
      </div>

      <Video />

      <div className='div6 col-12 d-flex justify-content-center '>
        <div className='col-11 container  d-flex flex-column gap-5 '>
          <div className='col-12  divlogohead d-flex flex-column gap-3'>
            <div className='col-12 d-flex flex-row  align-items-center gap-2'>
              <img src={logo2} width={35} alt="" />
              <span className='fs-4'> Laborc Service</span>
            </div>
            <div className='col-12 text_btn d-flex justify-content-between align-items-center' >
              <div className='col-lg-7'>
                <h1>Laboratory Solutions Tailored
                  <br /> to Your Research Needs</h1>
              </div>

              <Link className='nav-link rounded-5 py-3 px-3' to={"/research"}>View All Services</Link>
            </div>
          </div>

          <SwiperSearch />
        </div>

      </div>
      <ShowPartTeams />

    </div>
  )
}
