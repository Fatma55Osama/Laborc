import React, { useEffect } from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'
import { GoArrowUpRight } from "react-icons/go"
import labourcDoctor from '../../assets/Blogimges/blog-img-02-500x400.jpg'
import { $domain, useData, usepagination } from '../../Store'
import { useRecoilValue } from 'recoil'
export default function ShowPartBlogs({ showheader = true, wrapperClass = "", blogsCount = 2, backcontennt = "", downdiv = "",deletePadding="", logoicon = true, }) {
    const domain = useRecoilValue($domain)
    const { dataBlog } = useData();
    const { setblogsperpage, blogsperpage } = usepagination()
    useEffect(() => {
        if (blogsperpage !== 4) {  // لا تغير القيمة إذا كانت نفس القيمة الحالية
            setblogsperpage(4);
        }
    }, [setblogsperpage, blogsperpage])
    useEffect(() => {
        console.log('dataBlog:', dataBlog);
    }, [dataBlog]);

    return (
        <div className={`col-12 d-flex align-items-center justify-content-center ${wrapperClass}`} id={styles.heightDiv}>
            <div className={` container col-12 d-flex flex-column gap-5 py-5 py-md-5  py-lg-0 ${deletePadding}`}>
                {
                    showheader && (<div className='' id={styles.updiv}>
                        <h4 className='btn py-2 px-4 rounded-5'>
                            LATEST NEWS
                        </h4>
                        <div className='col-12 d-flex justify-content-between align-items-center' id={styles.interest}>
                            <div className='col-7 '>
                                <h2>Interesting articles updated every daily</h2>
                            </div>
                            <Link to={"/blog"} className="nav-link  rounded-5 py-2 px-2 py-md-3 px-md-4 d-flex align-items-center justify-content-center gap-1" id={styles.directblog}>View All Post <GoArrowUpRight /></Link>
                        </div>
                    </div>)
                }

                <div id={styles.downdiv} className={`d-flex flex-wrap justify-content-between gap-4 ${downdiv}`}>
                    {
                        dataBlog && dataBlog.slice(0, blogsCount).map((el) => (
                            <div key={el.documentId} className={`bg-white py-3 px-1  position-relative ${backcontennt}`} id={styles.backcontent} style={{ width: 630 }}>
                                <div className='container d-flex justify-content-between align-items-center gap-4 ' id={styles.detailcontantblog}>
                                    <img src={domain + el.img_card.url} className='rounded-5' width={240} height={185} alt="" style={{ objectFit: "cover" }} />
                                    <div className='d-flex flex-column gap-2 col-7 col-md-7 col-lg-7'>
                                        <p className='m-0'>{el.day} {el.month},2024 / <span> {el.title1}</span></p>
                                        <Link to={`/blogdetalis/${el.documentId}`} className='nav-link'> <h3>{el.title2}</h3></Link>
                                    </div>
                                </div>
                                {
                                    logoicon && (<Link to={`/blogdetalis/${el.documentId}`} className='col-12 nav-link d-flex justify-content-end align-items-end '>
                                        <div className='  position-absolute ' id={styles.parentLogoLink}>
                                            <div className='d-flex justify-content-center align-items-center' id={styles.logolink}><GoArrowUpRight /></div>
                                        </div>
                                    </Link>)
                                }



                            </div>
                        ))
                    }

                </div>
            </div>

        </div>
    )
}
