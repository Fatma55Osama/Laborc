import React from 'react'
import styles from './index.module.css'
import bubnles from '../../assets/shape-39.png'
import member from '../../assets/team-page-img4.png'
import { $domain, useData } from '../../Store'
import { useRecoilValue } from 'recoil'
import { Link } from 'react-router-dom'
export default function ShowPartTeams() {
  const { dataTeams } = useData()
  const domain = useRecoilValue($domain)
  return (
    <div className={styles.bigDivteam}>
      <div className='container position-relative  d-flex flex-column'>
        <div className={styles.imgContainer + ' d-flex   '}>
          <img src={bubnles} alt="" />
          <div className='d-flex flex-column align-items-center mt-5' id={styles.expertText}>
            <h4 className='btn py-2 px-4 rounded-5'>
              TEAM MEMBERS
            </h4>
            <h2>Our Expert Scientists</h2>
          </div>
        </div>
        <div className='d-flex flex-wrap justify-content-between ' id={styles.expertallteam}>
          {
            dataTeams.slice(0, 4).map((el,index) => (
              <div key={el.documentId} className=' d-flex flex-column gap-3 ' data-aos="fade-up"
              data-aos-offset="10" data-aos-delay={`${index * 350}`} id={styles.memeberteam}>
                <img src={domain + el.img_doctor.url} alt="" />
                <div className={styles.inform + " text-center"}>
                 <Link to={`/teamdetails/${el.documentId}`} className='nav-link'> <h3>{el.name_doctor}</h3></Link>
                  <span>{el.expert_doctor}</span>
                </div>
              </div>
            ))
          }

        </div>

      </div>
    </div>
  )
}
