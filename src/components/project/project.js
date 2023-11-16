import React from "react";
import styles from "./project.module.css";

export default function Project() {
  return (
    <>
      <div className={styles.bg}>
        <h1 className={styles.bgh1}>專案</h1>

        <div className={styles.project1}>
          <img
            src={`${process.env.PUBLIC_URL}/img/curious-rover.jpg`}
            alt="nasa"
          />
          <div className={styles.container}>
            <h3 className={styles.project1h3}>火星計畫</h3>
            <p>
              This website template has been designed by Free Website Templates
              for you, for free. You can replace all this text with your own
              text.
            </p>
            <div className={styles.containerbtn}>
              <button className={styles.project1btn}>閱讀更多</button>
            </div>
          </div>
        </div>
        <hr className={styles.projecthr} />

        <div className={styles.project1}>
          <img
            src={`${process.env.PUBLIC_URL}/img/space-station.jpg`}
            alt="nasa"
          />
          <div className={styles.container}>
            <h3 className={styles.project1h3}>火星計畫</h3>
            <p>
              This website template has been designed by Free Website Templates
              for you, for free. You can replace all this text with your own
              text.
            </p>
            <div className={styles.containerbtn}>
              <button className={styles.project1btn}>閱讀更多</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
