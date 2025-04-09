import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import Header from '../Component/Header'
import { useRecoilState, useRecoilValue } from 'recoil'
import { $active, $domain } from '../Store'
import { FaAngleRight } from 'react-icons/fa6'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { RiArrowRightUpLine } from 'react-icons/ri'
import Ourworks from '../Component/Ourworks'
import Footer from '../Component/Footer'
import { getcategory } from '../Api/GetCategory'
import SectionVideo2 from '../Component/SectionVideo2'

export default function Research() {
  const [categoryreaserch, setCategoryreaserch] = useState([])
  const [active, setActive] = useRecoilState($active)
  const domain = useRecoilValue($domain)
  const breadcrumbsitems = [{ text: "Home", url: "/" }, { text: "Our Research", url: "/research" }]
  // useEffect(() => {
  //   axios.get(`${domain}/api/categories`, {
  //     params: {
  //       populate: "*"
  //     }
  //   }).then((res) => {
  //     setCategoryreaserch(res.data.data)
  //     console.log(res.data.data)
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  // }, [])
  useEffect(()=>{
    getcategory(domain).then((res)=>{
      setCategoryreaserch(res)
    })
  },[domain])
  return (
    <div className={styles.maindiv + " col-12"}>
      <div className={styles.section1 + " h-100 d-flex flex-column"}>
        <div className='container d-flex flex-column justify-content-center  h-100 flex-grow-1  gap-2  '>
          <h1>Our Research</h1>
          <span className={styles.spanbream + ' d-flex flex-row align-items-center gap-1'}><Link to={"/"} className='nav-link'>Home</Link>  <FaAngleRight className='iconfaright' /> <Link to={"/research"} className='nav-link'> Our Research</Link></span>
        </div>
      </div>

      <div className={styles.section2}>
        <div className='container  d-flex justify-content-center align-items-center'>
          <div className={styles.carddiv + " col-12 d-flex flex-row flex-wrap justify-content-center gap-4"}>
            {
              categoryreaserch.map((el, index) => {
                  console.log(el) ;
                  console.log(el.imge_category); 
                  console.log(domain + el.imge_category?.url);
                return (
                  <Card key={el.documentId} className={styles.cardall}style={{ width: '26rem', borderRadius: '0',backgroundColor:" #F1F5FD" ,border:"none"}} >  {/* إزالة الـ border-radius */}
                 
                    <Card.Img className={styles.cardimg } variant="top" src={domain+el.imge_category.url} />
                    <Card.Body>
                      <Card.Title className={styles.cardtitle}>{el.title}</Card.Title>
                      <Card.Text className={styles.cardtext}>
                       {el.description}
                      </Card.Text>
                      <Link to={`/Deatailesresearch/${el.documentId}`} className={styles.cardlink +' nav-link'}>Read More <RiArrowRightUpLine className={styles.iconright} strokeWidth={0.5}/></Link>
                    </Card.Body>
                  </Card>
                )
              })
            }

          </div>
        </div>
      </div>
      <Ourworks/>
      <SectionVideo2/>
      
    </div>
  )
}
