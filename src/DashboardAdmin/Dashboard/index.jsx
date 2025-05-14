import React from 'react';
import image from '../../assets/bg-02.png'
import styles from './index.module.css'
export default function Dashboard() {
 

  return (
    <div className='d-flex justify-content-center align-items-center flex-column gap-1  flex-grow-1' id={styles.dash}>
            <img src={image} alt="" />
           <h3> Welcom to the Dashboad</h3>
      <div>
    
      </div>
 
    </div>
  );
}
