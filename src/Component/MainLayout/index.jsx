import React, { useEffect } from 'react'
import Header from '../Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Footer'
import { useLoading } from '../../Store'
import Loader from '../Loader'

export default function MainLayout() {
  const { loaderindex, setLoderindex } = useLoading()
  const location = useLocation();
  useEffect(() => {
    setLoderindex(true);
    const timer = setTimeout(() => {
      setLoderindex(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location.pathname]);
  return (
    <>
      {
        loaderindex ? <Loader /> : (
          <div className='col-12 h-100 d-flex flex-column justify-content-between'>
            <Header />
            <Outlet />
            <Footer />
          </div>
        )
      }
    </>
  )
}
