import React from 'react'
import styles from './index.module.css'
import { TbFlask2, TbFlask2Filled } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { RiArrowRightUpLine } from 'react-icons/ri'
import ShowPartBlogs from '../ShowPartBlogs';
export default function SideCategory() {

  return (
    <div className='col-3  container d-flex flex-column gap-5 ' id={styles.div2}>
      <div className=''>
        <div className='col-12 pt-3 ps-3' id={styles.layoutbord}>
          <div className='d-flex flex-column'>
            <div className='d-flex gap-1'>

            <TbFlask2 style={{ fontSize: "25px", color: "#3772ff" }} />
            <h4>Recent Blogs</h4>
            </div>
            <div className='col-12 d-flex justify-content-center align-items-center'>
              <ShowPartBlogs showheader={false} wrapperClass={styles.detailsblogstyle} blogsCount={2} backcontennt={styles.backcontennt} downdiv={styles.downdiv} logoicon={false} deletePadding={styles.deletePadding}/>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contactus + " col-12   d-flex flex-column align-items-center justify-content-center gap-3"}>
        <div className=' text-white rounded-5 border d-inline px-3 py-2'>
          Call 123 234-567-890
        </div>
        <div className='text-center'>
          <h4> Book now for accurate and </h4>
          <h3>reliable test results</h3>
        </div>

        <Link to={'/Contactus'} className='nav-link btn rounded-5 px-4 py-3 text-white' id={styles.btngocontact}>Contact us Now  <RiArrowRightUpLine /></Link>
      </div>
    </div>
  )
}
