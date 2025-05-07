import React, { useEffect } from 'react'
import styles from './index.module.css'
import { BiLogOutCircle } from "react-icons/bi";
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/header-logo2.png'
import { usepathDash } from '../../Store';

export default function Sidebar() {
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
      <div className='col-12 container d-flex flex-column h-100 py-md-3 gap-md-5'>
        <img src={logo} width={100} />

        <div className='flex-grow-1 d-flex flex-column gap-5'>
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

        <div className='d-flex flex-column align-items-center gap-md-5 mb-md-4'>
          <button className='d-flex align-items-center gap-1' onClick={logout}>
            <BiLogOutCircle /> LogOut
          </button>
        </div>
      </div>
    </div>
  );
}
