import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import { Link, useParams } from 'react-router-dom'
import covid from '../assets/research-details1-img1.png'
import { IoCheckmark } from 'react-icons/io5'
import { Accordion } from 'react-bootstrap'
import colagen from '../assets/research-details1-img2.png'
import ashea from '../assets/research-details1-img3.png'
import { IoIosArrowForward } from 'react-icons/io'
import { ShowDetailsResearch } from '../Api/ShowDetailsResearch'
import { $domain, useResearch } from '../Store'
import { useRecoilValue } from 'recoil'
import { getfqlresearch } from '../Api/indexfqlresearch'
import { FaAngleRight } from 'react-icons/fa6'
export default function DetailsResearch() {
  const params = useParams()
  const [fqlreseach, setFqlresearch] = useState([])
  const { research: namecat, Detailsreaserch, setDetailsreaserch } = useResearch()
  const domain = useRecoilValue($domain)
  let id = params.id
  useEffect(() => {
    ShowDetailsResearch(domain, id).then((res) => {
      setDetailsreaserch(res)
      console.log('detailsreserch', res)
    })
    getfqlresearch(domain).then((res) => {
      setFqlresearch(res)
    })
  }, [domain, id, setDetailsreaserch])
  // if (!Detailsreaserch || !Detailsreaserch.cover) {
  //   return <p>Loading...</p>;
  // }
  const research = Detailsreaserch.research?.[0] || {};
  return (
    <div className={styles.parent}>
      <div className='col-12'>
        <div className={styles.imgdiv + "  d-flex flex-column"} style={{
          backgroundImage: `url(${research.cover ? domain + research.cover.url : ''})`
        }}>
          <div className='container col-12 text-white d-flex flex-column justify-content-center  h-100 flex-grow-1  gap-2  '>
            <h1>Our Research</h1>
            <span className={styles.spanbream + ' d-flex flex-row align-items-center gap-1'}><Link to={"/"} className='nav-link'>Home</Link>  <FaAngleRight className='iconfaright' /> <Link to={"/research"} className='nav-link'> Our Research</Link>  <FaAngleRight />
             <Link className='nav-link'> {research.title_1}</Link></span>
          </div>
        </div>
        <div className='container col-12 d-flex justify-content-between ' id={styles['parent_container']}>
          <div className=' h-100 d-flex flex-column gap-5' id={styles.part1}>
            <div className='col-12 container py-5 px-4 d-flex flex-column gap-3' id={styles.category}>
              <h3>Categories</h3>
              <div className='col-12 d-flex flex-column gap-3'>
                {
                  namecat.map((el, index) => (
                    <Link key={el.documentId} to={`/Deatailesresearch/${el.documentId}`} className={` ${el.documentId == id ? styles.activeLinkblue : styles.activelinkwhite} py-3 col-12 nav-link d-flex align-items-center justify-content-between px-3`} id={styles.categoryelement}>{el.title}<IoIosArrowForward /></Link>
                  ))
                }
                {/* <Link className='py-3 col-12 nav-link d-flex align-items-center justify-content-between px-3' id={styles.categoryelement}>Element Analysis <IoIosArrowForward /></Link>
                <Link className='py-3 col-12 nav-link d-flex align-items-center justify-content-between px-3 text-white' id={styles.categoryelement}>Element Analysis <IoIosArrowForward /></Link>
                <Link className='py-3 col-12 nav-link d-flex align-items-center justify-content-between px-3 text-white' id={styles.categoryelement}>Element Analysis <IoIosArrowForward /></Link>
                <Link className='py-3 col-12 nav-link d-flex align-items-center justify-content-between px-3 text-white' id={styles.categoryelement}>Element Analysis <IoIosArrowForward /></Link>
                <Link className='py-3 col-12 nav-link d-flex align-items-center justify-content-between px-3 text-white' id={styles.categoryelement}>Element Analysis <IoIosArrowForward /></Link> */}

              </div>
            </div>
            <div className='col-12 container h-50 d-flex flex-column align-items-center py-5 px-5 gap-3 ' id={styles.book}>
              <h5>Book now for accurate and
                reliable test results</h5>
              <p>Our advanced laboratory ensures accurate and timely analysis, supporting your research and diagnostics with trusted results.</p>
              <Link to={'/Contactus'} className='py-3 col-12 nav-link d-flex align-items-center justify-content-center text-white text-center' id={styles.bookLink}>Book A Lab Visit</Link>

            </div>
          </div>
          {research && (
            <div className='col-8  h-100' id={styles.part2}>
              <div className='container col-12 d-flex flex-column gap-3'>
                <div className={styles.divcovid}>
                  {
                    research.topimg?.url && (
                      <img src={domain + research.topimg.url} />
                    )
                  }
                </div>

                <div className='d-flex flex-column' id={styles.section1}>
                  <h2>{research.title_1}</h2>
                  <p>{research.text_1}</p>
                  <p>{research.text_2}</p>
                </div>
                <div className='d-flex flex-column gap-3' id={styles.section2}>
                  <h2>{research.title2}</h2>
                  <ul className='d-flex flex-column  gap-4 p-0 m-0'>
                    <li className='d-flex col-12 bg-succes '>
                      <div className='d-flex flex-column gap-2'>
                        <div className='d-flex gap-2'>
                          <div className={styles.icon + " d-flex justify-content-center align-items-center"}>
                            <IoCheckmark />
                          </div>
                          <h4>{research.descriptiontitle}</h4>
                        </div>
                        <p className='ms-4'>{research.descriptiontext}</p>

                      </div>


                    </li>
                    <li className='d-flex col-12 bg-succes '>
                      <div className='d-flex flex-column gap-2'>
                        <div className='d-flex gap-2'>
                          <div className={styles.icon + " d-flex justify-content-center align-items-center"}>
                            <IoCheckmark />
                          </div>
                          <h4>{research.applicationtitle}</h4>
                        </div>
                        <p className='ms-4'>{research.applicationtext}</p>

                      </div>


                    </li>
                    <li className='d-flex col-12 bg-succes'>
                      <div className='d-flex flex-column gap-2'>
                        <div className='d-flex gap-2'>
                          <div className={styles.icon + " d-flex justify-content-center align-items-center"}>
                            <IoCheckmark />
                          </div>
                          <h4>{research.benefitstitle}</h4>
                        </div>
                        <p className='ms-4'>{research.benefitstext}</p>

                      </div>


                    </li>
                  </ul>
                </div>
                <div className='d-flex flex-column gap-3' id={styles.section2}>
                  <h2>{research.title3}</h2>
                  <ul className='d-flex flex-column  gap-4 p-0 m-0'>
                    <li className='d-flex col-12 '>
                      <div className='d-flex flex-column gap-2'>
                        <div className='d-flex gap-2'>
                          <div className={styles.icon + " d-flex justify-content-center align-items-center"}>
                            <IoCheckmark />
                          </div>
                          <h4>{research.descriptiontitle2}</h4>
                        </div>
                        <p className='ms-4'>{research.descriptiontext2}</p>

                      </div>
                    </li>
                    <li className='d-flex col-12 '>
                      <div className='d-flex flex-column gap-2'>
                        <div className='d-flex gap-2'>
                          <div className={styles.icon + " d-flex justify-content-center align-items-center"}>
                            <IoCheckmark />
                          </div>
                          <h4>{research.applicationtitle2}</h4>
                        </div>
                        <p className='ms-4'>{research.applicationtext2}</p>

                      </div>


                    </li>
                    <li className='d-flex col-12 '>
                      <div className='d-flex flex-column gap-2'>
                        <div className='d-flex gap-2'>
                          <div className={styles.icon + " d-flex justify-content-center align-items-center"}>
                            <IoCheckmark />
                          </div>
                          <h4>{research.benefitstitle2}</h4>
                        </div>
                        <p className='ms-4'>{research.benefitstext2}</p>

                      </div>


                    </li>
                  </ul> 
                </div>
                <div className='d-flex flex-column gap-3' id={styles.section2}>
                  <h2>{research.title4}</h2>
                  <p>{research.text4}</p>
                </div>
                {research.img?.length >= 2 && (
                  <div className={styles.groupimg + " d-flex justify-content-between"}>
                    <img src={domain + research.img[0].url} alt="" />
                    <img src={domain + research.img[1].url} alt="" />

                  </div>
                )}

                <div className={styles.faqs + "  d-flex flex-column  mt-3"}>
                  <h2>
                    FAQ’s About {research.title_1}
                  </h2>
                  {/* {`${index==1?"0":""}`} */}
                  {
                    <Accordion className={styles.Accordionbig + ' py-5 d-flex flex-column gap-3'} defaultActiveKey="0" flush>
                      {
                        research.faqresearches && (
                          research.faqresearches.map((el, index) => (
                            <Accordion.Item key={el.documentId} className={styles.Accordionitems + ' '} eventKey={`${index}`}>
                              <Accordion.Header className={styles.Accordionheader + ' '}>{el.Qustion}</Accordion.Header>
                              <Accordion.Body className={styles.Accordionbody + ''}>
                                {el.answer}
                              </Accordion.Body>
                            </Accordion.Item>

                          ))
                        )
                      }


                    </Accordion>


                  }

                </div>
              </div>


            </div>
          )}

        </div>
      </div>

    </div>
  )
}
