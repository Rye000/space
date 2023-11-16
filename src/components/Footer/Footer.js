import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={styles.ft}>
        <h3 className={styles.fth3}>FOLLOW OUR MISSIONS ON</h3>
        <div className={styles.allicon}>
          <i className={`fa-brands fa-facebook-f ${styles.icon}`}></i>
          <i className={`fa-brands fa-twitter ${styles.icon}`}></i>
          <i className={`fa-brands fa-google-plus-g ${styles.icon}`}></i>
          <i className={`fa-brands fa-pinterest-p ${styles.icon}`}></i>
        </div>
      </div>

      <div className={styles.rights}>
        <h6>© 2023 BY SPACE PROSPECTION | ALL RIGHTS RESERVED</h6>
      </div>
    </>
  );
}
