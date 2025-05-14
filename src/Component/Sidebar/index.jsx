import React, { useEffect } from 'react'
import styles from './index.module.css'
import { BiLogOutCircle } from "react-icons/bi";
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/header-logo2.png'
import { useModale, usepathDash } from '../../Store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import Notafication from '../Notafication';
import { FaXmark } from 'react-icons/fa6';

export default function Sidebar() {
  const { modalindex, openModal, closeModal } = useModale()
  const location = useLocation();
  const navigate = useNavigate();
  const { pathdash } = usepathDash();

  useEffect(() => {
    const userId =
      sessionStorage.getItem("user_id:") || localStorage.getItem("user_id:");

    if (!userId) {
      navigate("/loginAdmin")
    }
  }, []);
  const logout = () => {
    sessionStorage.clear();
    localStorage.clear();
    navigate("/loginAdmin");
  };

  return (
    <div className='d-flex flex-column border-end' id={styles.sidebar}>
      <div className='col-12 container d-flex flex-column h-100 py-md-3 gap-md-5 gap-3'>
        <img src={logo} width={100} />

        <div className='flex-grow-1 d-md-flex d-none flex-md-column d-sm-none gap-md-5 gap-2'>
          {pathdash.map((el, index) => {
            const Icon = el.icon;
            const isActive = location.pathname.startsWith(el.path);
            return (

              <Link
                key={index}
                to={el.path}
                className={`nav-link d-flex align-items-center gap-2 ${isActive ? styles.active : ''}`}
              >
                <Icon id={styles.icon} />
                {el.name}
              </Link>
            );
          })}
        </div>

        <div className='d-md-flex flex-column d-none align-items-center gap-md-5 mb-md-4'>
          <button className='d-flex align-items-center gap-1' onClick={logout}>
            <BiLogOutCircle /> LogOut
          </button>
        </div>
        <div className='border_icon d-flex d-md-flex d-md-none ' onClick={() => openModal(true)}>

          <FontAwesomeIcon icon={faBarsStaggered} className='icon_fontAwesome ' />

        </div>
        {
          modalindex && (
            <div className='modal col-12 d-flex justify-content-center align-items-center ' id={styles.modal} >
              <div className='col-12  d-flex justify-content-center  '>
                <div className='col-11 d-flex justify-content-between align-items-center mt-3'>
                  <img className='d-flex d-md-flex d-lg-none' src={logo} width={170} alt="" />
                  <FaXmark className='FaXmark' onClick={() => closeModal(false)} />
                </div>

              </div>
              <div className='flex-grow-1 container d-flex flex-md-column gap-md-5 gap-2' id={styles.section4}>
                {pathdash.map((el, index) => {
                  const Icon = el.icon;
                  const isActive = location.pathname.startsWith(el.path);
                  return (

                    <Link
                      key={index}
                      to={el.path}
                      className={`nav-link d-flex align-items-center gap-2 ${isActive ? styles.active : ''}`}
                      id={styles.fonttext}
                      onClick={()=> closeModal(false)}
                    >
                      <Icon id={styles.icon} />
                      {el.name}
                    </Link>
                  );
                })}
                
              </div>




            </div>

    
      )
        }
    </div>
    </div >
  );
}
