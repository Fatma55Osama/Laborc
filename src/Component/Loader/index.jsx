import React from 'react'
import styles from './index.module.css'
export default function Loader() {
  return (
    <div className={styles.loaderContainer + "  col-12  d-flex  flex-column gap-5 justify-content-center align-items-center align-content-center"}>
        <span className={styles.loader}></span>
        <h1>LABORC</h1>
    </div>
  )
}
