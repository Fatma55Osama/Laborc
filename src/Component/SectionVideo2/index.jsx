import React, { useState } from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'
import points from '../../assets/shape-15.png'
import telescop from '../../assets/shape-6.png'
import line from '../../assets/shape-16.png'
import anamat from '../../assets/shape-11.png'
import videobg from '../../assets/video-bg-2.jpg'
import { $isplay } from '../../Store'
import { useRecoilState } from 'recoil'
import { TbPuzzle2, TbUserPlus } from 'react-icons/tb'
import { LuNotebookPen } from 'react-icons/lu'
import { BsPuzzleFill } from 'react-icons/bs'
import { GiPuzzle } from 'react-icons/gi'
import Rountin from '../../assets/ServiceImg/service-img-01-770x570.jpg'
export default function SectionVideo2() {
    const [isplaying] = useRecoilState($isplay)
    const [modal, setModal] = useState(false)

    return (
        <div className={styles.all + " col-12 "}>
            <div className='d-flex justify-content-between align-items-center position-relative '  >
                 
                <img src={anamat} width={370} alt="" id={styles.backoverlay} />
                <img src={telescop} width={290} alt=""  id={styles.backoverlay}/>

                <div className={styles.points + " position-absolute col-12  d-flex flex-column justify-content-between align-items-center "}>
                    <div className='h-100   d-flex justify-content-center align-items-center' id={styles.allpoints}>
                        <img src={points} alt="" />
                    </div>
                    <div className=' position-absolute col-12 container h-100 d-flex justify-content-center align-items-center mt-5' style={{ zIndex: 10 }} >
                        {
                            !isplaying && (
                                <div className={styles.bgcontainerimg + ' position-absolute col-10 h-100 d-flex justify-content-center align-items-center '}>
                                    <img src={Rountin} className={styles.bgimg + '  w-100 h-100 '} style={{ objectFit: "cover", backgroundAttachment: "fixed" }} alt="" />
                                    <div className={styles.filter}></div>
                                    <button onClick={() => setModal(true)} className='position-absolute bg-white d-flex justify-content-center align-items-center' id={styles.button1}>
                                        <span></span>
                                    </button>

                                </div>
                            )
                        }

                    </div>


                    <div className={styles.textandhexagon + ' container position-absolute flex-grow-1 d-flex flex-column justify-content-between align-items-center flex-grow-1  mt-5'}>
                        <div className={styles.texth4 + ' col-12   d-flex justify-content-center align-items-center  '}><h4 className='text-center col-md-6 col-10 text-center '>
                            Our lab drives innovation in energy and technology for a sustainable future</h4>
                        </div>
                        <div className={styles.allhexagon + ' col-md-12 col-10  d-flex justify-content-center align-items-center '}>
                            <div className={styles.parenthexagon + ' container  d-flex justify-content-between align-items-baseline '}>
                                <div className='col-3 d-flex flex-column  justify-content-center align-items-center text-center gap-3'>
                                    <div className={styles.hexagon + " d-flex justify-content-center align-items-center"} style={{ background: "#37aa67", color: "white", fontSize: "32px" }}><TbUserPlus className={styles.bookban} /></div>
                                    <div className='d-flex flex-column gap-1'> <h5>Client Briefs Project</h5>
                                        <p>The more details you can provide, the better lab can assist you</p></div>

                                </div>
                                <img src={line} className={styles.lines} width={180} alt="" />
                                <div className='col-3  d-flex flex-column justify-content-center align-items-center text-center gap-3 '>

                                    <div className={styles.hexagon + " d-flex justify-content-center align-items-center"} style={{ background: "#ffb806", color: "white", fontSize: "32px" }} ><LuNotebookPen className={styles.bookban}/></div>
                                    <div className='d-flex flex-column gap-1'>
                                        <h5>Lab Start Testing</h5>
                                        <p>Specify the criteria for success and the key performance indicators</p>
                                    </div>

                                </div>
                                <img src={line} className={styles.lines} width={180} alt="" />

                                <div className='col-3 d-flex flex-column justify-content-center align-items-center text-center gap-3'>
                                    <div className={styles.hexagon + " d-flex justify-content-center align-items-center"} style={{ background: "#ff414b", color: "white", fontSize: "32px" }}><TbPuzzle2  className={styles.bookban}/></div>
                                    <div className='d-flex flex-column gap-1'>
                                        <h5>Reports Delivered</h5>
                                        <p>Our team is available for a follow-up meeting to discuss the contents</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {
                modal && (
                    <div onClick={() => setModal(false)} className={styles.modal2 + " d-flex justify-content-center align-items-center "}>
                        <div onClick={(e) => e.stopPropagation()} className={styles.contentModal2}>
                            <iframe width="560" height="315" className={styles.iframevido} src="https://www.youtube.com/embed/HUBLGaITbGo?si=6MltR7FC86Fh7CXI&amp;start=3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>)
            }

        </div>
    )
}
