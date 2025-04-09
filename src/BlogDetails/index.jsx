import React, { useEffect, useState } from 'react'
import styles from './indx.module.css'
import Header from '../Component/Header'
import { Link, useParams } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa6'
import explor from '../assets/Blogimges/blog-img-02-770x762.jpg'
import { MdFormatQuote } from 'react-icons/md'
import img1 from '../assets/Blogimges/blog-detail-01.webp'
import img2 from '../assets/Blogimges/blog-detail-02.webp'
import { IoCheckmarkOutline } from 'react-icons/io5'
import SideCategory from '../Component/SideCategory'
import { $domain, useData } from '../Store'
import { useRecoilValue } from 'recoil'
import { ShowDetailsBlog } from '../Api/ShowDetailsBlog'
export default function BlogDetails() {
  // const [singleblog,setSingleblog] = useState({})
  const { DetailsBlog, setDetalisblogs } = useData()
  const domain = useRecoilValue($domain)
  const parmas = useParams()
  let id = parmas.id
  useEffect(() => {
    ShowDetailsBlog(domain, id).then((res) => {
      setDetalisblogs(res)
    })
  }, [])
  return (
    <div className={styles.bigdiv + " col-12"}>
      <div className='col-12 d-flex flex-column justify-content-between align-items-center' id={styles.section1}>
        <div id={styles.bgImg} className=' text-white d-flex justify-content-start align-items-center'>
          <div className=' container ms-0 col-12 d-flex flex-column justify-content-start'>
            <div className='  col-8  d-flex flex-column justify-content-center gap-2' id={styles.textdecor}>
              <h2>{DetailsBlog.title2}</h2>
              <div className='d-flex align-items-center gap-1'>
                <Link className='nav-link'>Home</Link>
                <FaAngleRight />
                <Link className='nav-link'>Blog</Link>
                <FaAngleRight />
                <Link className='nav-link'>{DetailsBlog.title2}</Link>

              </div>
            </div>

          </div>

        </div>
      </div>
      <div className=' col-12 d-flex justify-content-center' id={styles.section2}>
        <div className=' me-0 ms-0 row d-flex' id={styles.twodiv}>
          <div className='col-8  container' id={styles.div1}>
            <div className=''>
              {DetailsBlog.img_card && DetailsBlog.img_card.url && (<img src={domain + DetailsBlog.img_card.url} width={900} height={828} alt="" />)}
              <div className={styles.divbtn}>
                <button className='rounded-5 text-white py-1 px-3'>{DetailsBlog.title1}</button>
              </div>
              <p className='border-bottom pb-3 '>
                BY Laborc / {DetailsBlog.day} {DetailsBlog.month} {DetailsBlog.Year}
              </p>
              {DetailsBlog.details_blog &&  (
                <div>
                  <div className='d-flex flex-column align-items-baseline gap-4'>

                    <p className={styles.pragraph1 + ' m-0 mt-0 '} ><button className={styles.logoM}>{DetailsBlog.details_blog.logo}</button>{DetailsBlog.details_blog.pargraph1}</p>
                    <p className={styles.pragraph1 + ' m-0 mt-1'}>{DetailsBlog.details_blog.pargraph1}</p>
                  </div>
                  <div className={styles.opininCleint}>
                    <div className='container d-flex justify-content-between align-items-center'>
                      <div className={styles.iconquote + " d-flex justify-content-center align-items-center"}><MdFormatQuote /></div>
                      <div className=' col-11'>
                        <p>{DetailsBlog.details_blog.opinion_user}</p>
                        <span className='d-flex gap-2'>- {DetailsBlog.details_blog.Who_opinoin}</span>
                      </div>
                    </div>

                  </div>
                  <div className={styles.sectionExplor + " d-flex flex-column gap-4 "}>
                    <h3 className='m-0'>{ DetailsBlog.details_blog.header1}</h3>
                    <p className=' m-0 mt-0 col-12 '>{ DetailsBlog.details_blog.pragraph3}</p>
                    <div className={styles.imgestwo + " mt-2 d-flex justify-content-between"}>
                      <img width={455} height={355} src={domain+DetailsBlog.details_blog.img2[0].url} alt="" />
                      <img width={455} height={355} src={domain+DetailsBlog.details_blog.img2[1].url}  alt="" />
                    </div>
                    <div className='d-flex flex-column gap-3  pb-5 mb-5 '>
                      <div className='d-flex gap-3'>
                        <div className={styles.covermark + " d-flex justify-content-center align-items-center"}><IoCheckmarkOutline /></div>
                        <span>{DetailsBlog.details_blog.Li1}</span>
                      </div>
                      <div className='d-flex gap-3'>
                        <div className={styles.covermark + " d-flex justify-content-center align-items-center"}><IoCheckmarkOutline /></div>
                        <span>{DetailsBlog.details_blog.Li2}</span>
                      </div>
                      <div className='d-flex gap-3'>
                        <div className={styles.covermark + " d-flex justify-content-center align-items-center"}><IoCheckmarkOutline /></div>
                        <span>{DetailsBlog.details_blog.Li3}</span>
                      </div>
                      <div className='d-flex gap-3'>
                        <div className={styles.covermark + " d-flex justify-content-center align-items-center"}><IoCheckmarkOutline /></div>
                        <span>{DetailsBlog.details_blog.Li4}</span>
                      </div>
                      <p className=' m-0 mt-0 col-12 '>{DetailsBlog.details_blog.LiPargraph}</p>
                    </div>
                  </div>
                </div>
              )}


            </div>
          </div>
          <SideCategory />
          {/* <div className='col-3 bg-info container' id={styles.div2}></div> */}
        </div>

      </div>

    </div>
  )
}
