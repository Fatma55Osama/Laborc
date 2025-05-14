import React from 'react'
import Sidebar from '../Sidebar'
import Rebooking from '../../DashboardAdmin/Rebooking'
import { Outlet, useLocation } from 'react-router-dom'
import Editbooking from '../../DashboardAdmin/Editbooking'
import styles from './index.module.css'
export default function MainLayoutDash() {
  // const location = useLocation();

  return (
    // <div className='col-12'>
    //   <Sidebar/>
    //   <Rebooking/>
    //   <Outlet/>
    //   <Editbooking/>
    // </div>
    <div className='col-12 flex-grow-1 h-100 d-flex flex-column flex-md-row '>
      <Sidebar />
      <div className='outlet d-flex flex-column flex-grow-1' id={styles.Outlet}>
        <Outlet />
      </div>
      

    </div>
  )
}
