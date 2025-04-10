import React, { useEffect } from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa6'
import Cardservice from '../Component/Cardservice'
import { useRecoilValue } from 'recoil'
import { $domain, useData } from '../Store'
import { indexservice } from '../Api/indexservice'
export default function Servicepage() {
  const { dataservice, setService } = useData()
  const domain = useRecoilValue($domain)
  useEffect(()=>{
    indexservice(domain).then((res)=> {
      setService(res)
      console.log(res)
    })
  },[])
  return (
    <div className={styles.parentdiv + ' col-12 d-flex flex-column'}>
      <div className='col-12 d-flex justify-content-center' id={styles.berveiw}>
        <div className={styles.imgveiw }>
          <div className='container  h-100 text-white ms-0 col-12 d-flex flex-column justify-content-center '>
            <h1>Services</h1>
            <div className='  col-8  d-flex flex-column justify-content-center gap-2' >
              <div className='d-flex  flex-row align-items-center gap-1'>
                <Link to={"/"} className='nav-link'>Home</Link>
                <FaAngleRight />
                <Link className='nav-link'>Services</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className='col-12 d-flex  '>
        <div className=' h-100  col-12 mb-5  d-flex flex-wrap justify-content-center gap-4'>
          {
            dataservice && dataservice.map((el)=>(
              <Cardservice key={el.documentId} documentId={el.documentId} title={el.title} header={el.header} paragraph={el.paragraph} img={domain+el.img_card.url }     />

            ))

          }

        </div>
      </div>


    </div>
  )
}
