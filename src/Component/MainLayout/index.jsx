import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

export default function MainLayout() {
  return (
    <div className='col-12 h-100 d-flex flex-column justify-content-between'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
