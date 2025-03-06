import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import './index.scss'
import Header from '../Component/Header'
import shap from '../assets/shape-53.png'
import { Link } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion';
import { useRecoilValue } from 'recoil'
import { $domain } from '../Store'
import { getfaq } from '../Api/GetFAQ'
import SectionVideo2 from '../Component/SectionVideo2'
import Footer from '../Component/Footer'
export default function FAQ() {
  const domain = useRecoilValue($domain)
  const [questions,setQuestions] = useState([])
  useEffect(()=>{
    getfaq(domain).then((res)=>{
       setQuestions(res)
       console.log(res)
    })
  },[])
  return (
    <div className={styles.alldiv + " col-12"}>
      <div className={styles.imgback + ' col-12 d-flex '}>
        <div className={styles.header + " col-12"}>
          <Header />
        </div>
        <div className={styles.shap + ' '}>
          <img src={shap} alt="" width={475} />
        </div>
        <div className={styles.textcenter + '  col-12 container text-center r d-flex flex-column align-items-center justify-content-center gap-2'}>
          <h2>Frequently Asked Question</h2>
          <span className={styles.span + "  d-flex flex-row justify-content-between gap-2"}><Link to={"/"} className='nav-link'>Home</Link> - <Link to={"/faq"} className='nav-link'>FAQ’s</Link></span>
        </div>
      </div>
      <div className={styles.divquestion + ' col-12'}>
        <div className='container d-flex flex-column justify-content-center align-items-center gap-4 mt-5 '>
          <div className={styles.shapAnimate + " bg-success"}></div>
          <div className={styles.section1 + " d-flex flex-column align-items-center gap-4"}>
            <button className='py-1 px-3 d-flex align-items-center justify-content-center'>General FAQ’s</button>
            <h3>Frequently Asked Questions</h3>
          </div>
          <div className=' col-10 d-flex flex-column justify-content-center align-items-center'>
            {
              questions.map((el,index)=>{
                return(
                  
                  <Accordion key={el.documentId} >
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>{`${index+1}. ${el.Qustion}`}</Accordion.Header>
                    <Accordion.Body className={styles.answer}>
                         {el.anwer}
                    </Accordion.Body>
                  </Accordion.Item>
                  </Accordion>
                )
              })
            }
            {/* <Accordion  defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion> */}
          </div>
        </div>
      </div>
      <div className="col-12">
         <SectionVideo2/>
      </div>
      <div className={styles.send  + ' col-12  mb-5 h-100 d-flex'}>
         <div className='container  flex-grow-1 d-flex flex-column justify-content-center align-items-center gap-4'>
          <button className='py-1 px-3 d-flex align-items-center justify-content-center'>SEND MESSAGE</button>
          <h3>Ask Your Question</h3>
          <form className='col-12 d-flex flex-column justify-content-center align-items-center align-content-between gap-4'>
            <div className={styles.fristwoinput + " col-9  d-flex justify-content-around align-items-center align-content-between"}>
            <input className='col-5'  type="text" placeholder='Your name' id="" />
             <input className='col-5' type="email" placeholder='Your email' />
            </div>
            <textarea className={ styles.textarea + ' '} type="Message" placeholder='Type your message...'/>
             <Link className={styles.Asksend + ' py-2 px-4 rounded-5 nav-link btn text-white'}>Ask Question</Link>
          </form>
         </div>
      </div>
      <Footer />
    </div>
  )
}
