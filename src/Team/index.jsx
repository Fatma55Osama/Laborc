import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import Header from '../Component/Header'
import { FaAngleRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { getteam } from '../Api/GetTeam'
import { $domain, useData } from '../Store'
import { useRecoilValue } from 'recoil'
import Footer from '../Component/Footer'
export default function Team() {
  // const [teamperson, setTeamperson] = useState([])
  const { dataTeams: teamperson, setTeams } = useData()
  const domain = useRecoilValue($domain)

  return (
    <div className={styles.parent + " col-12"}>
      <div className={styles.bgimg + " d-flex flex-column h-100"}>
        <div className='container d-flex flex-column flex-grow-1 justify-content-center gap-2'>
          <h1>Our Team Members</h1>
          <span className={styles.spanlink + ' d-flex flex-row align-items-center gap-1 '}><Link to={"/"} className='nav-link'>Home</Link><FaAngleRight /><Link to={'/team'} className='nav-link'>Our Team Members</Link></span>
        </div>
      </div>
      <div className={styles.personteam + ' col-12 '}>
        <div className='container col-12  d-flex flex-row'>
          <div className={styles.carddiv + " col-12 d-flex flex-row flex-wrap justify-content-center gap-4 "}>
            {
              teamperson.map((el, index) => {
                return (
                  <Card className={styles.cardall} key={el.documentId} style={{ width: '19rem', border: "none", borderRadius: '0' }}>
                    <div className={styles.divimg + ' col-12 '}>
                      <Card.Img variant="top" className={styles.imgcard} src={domain + el.img_doctor.url} />

                    </div>
                    <Card.Body className={styles.cardbody}>
                      <Card.Title className={styles.titlecard}><Link className='nav-link' to={`/teamdetails/${el.documentId}`}>{el.name_doctor}</Link></Card.Title>
                      <Card.Text className={styles.textcard}>
                        {el.expert_doctor}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                )

              })
            }
          </div>


        </div>
      </div>
    </div>
  )
}
