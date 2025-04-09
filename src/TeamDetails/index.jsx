import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getdetailsteams } from '../Api/GetDetailsTeams'
import { useRecoilValue } from 'recoil'
import { $domain } from '../Store'
import Header from '../Component/Header'
import styles from './index.module.css'
import { FaAngleRight, FaCheck, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import StarRating from '../Component/StarRating'
import { BsTwitterX } from 'react-icons/bs'
import Footer from '../Component/Footer'
export default function TeamDetails() {
  const [detailsingle, setDetailsingle] = useState({})
  const domain = useRecoilValue($domain)
  const parmas = useParams()
  let id = parmas.id
  useEffect(() => {
    getdetailsteams(domain, id).then((res) => {
      console.log(res)
      setDetailsingle(res)
    })
  }, [])
  return (
    <div className={styles.parent + " col-12"}>
      <div className={styles.bgimg + " d-flex flex-column h-100"}>
        <div className='container d-flex flex-column flex-grow-1 justify-content-center gap-2'>
          <h1>Team Details</h1>
          <span className={styles.spanlink + ' d-flex flex-row align-items-center gap-1 '}><Link to={"/"} className='nav-link'>Home</Link><FaAngleRight /><Link to={'/team'} className='nav-link'>Our Team Members</Link>
            <FaAngleRight />
            <Link to={`/teamdetails/${id}`} className='nav-link'>Team Detail</Link>
          </span>
        </div>
      </div>
      <div className={styles.middeldiv + " d-flex  h-100"}>
        <div className='container  flex-grow-1  d-flex flex-column align-items-center  justify-content-around'>
          <div className={styles.part1 + " col-12 d-flex align-items-center mt-5 "}>
            {detailsingle.img_doctor && detailsingle.img_doctor.url && (
              <div className={styles.divimgzoom + " col-3 "}><img src={domain + detailsingle.img_doctor.url} width={306} alt="Doctor" /></div>
            )}
            <div className={styles.experince + " col-9 d-flex flex-column gap-3 "}>
              <h3>{detailsingle.name_doctor}</h3>
              <p className='col-11'>{detailsingle.description}</p>
              <div className='d-flex gap-1'><StarRating rate={detailsingle.rate} totalStars={5} /> ({detailsingle.rate})  </div>
               <ul className='d-flex flex-column gap-3'>
                <li className='d-flex gap-2 align-items-center'>
                  <div className={styles.facheck + " d-flex justify-content-center align-items-center"}><FaCheck /></div>
                
                {detailsingle.expert1}</li>
                <li className='d-flex gap-2 align-items-center'><div className={styles.facheck + " d-flex justify-content-center align-items-center"}><FaCheck /></div> {detailsingle.expert2}</li>
                <li className='d-flex gap-2 align-items-center'><div className={styles.facheck  + " d-flex justify-content-center align-items-center"}><FaCheck /></div>{detailsingle.expert3}</li>
              </ul>
              <div className={styles.emails + " d-flex gap-2"}>
                <span className={styles.social + " d-flex justify-content-center align-items-center"}><FaFacebookF /></span>
                <span className={styles.social + " d-flex justify-content-center align-items-center"}><FaInstagram /></span>
                <span className={styles.social + " d-flex justify-content-center align-items-center"}><FaLinkedinIn /></span>
                <span className={styles.social + " d-flex justify-content-center align-items-center"}><BsTwitterX /></span>
              </div>
            </div>

          </div>
          <div className={styles.part2 + " d-flex flex-row flex-wrap  pb-5"}>
            <div className=' col-6 d-flex flex-column'>
              <h2>{detailsingle.Professional_title}</h2>
              <p className='col-11'>{detailsingle.Professional_paragraph}</p>
            </div>
            <div className=' col-6 d-flex flex-column'>
              <h2>{detailsingle.Key_title}</h2>
              <p>{detailsingle.Key_paragraph}</p>
            </div>
            <div className=' col-12 d-flex flex-column mt-5'>
              <h2>{detailsingle.Personal_title}</h2>
              <p>{detailsingle.Personal_paragraph}</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
