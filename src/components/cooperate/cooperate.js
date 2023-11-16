import React from "react";
import styles from "./cooperate.module.css";

export default function Cooperate() {
  return (
    <>
      <div className={styles.bg}>
        <div className={styles.contact}>
          <h1 className={styles.contacth1}>聯絡我們</h1>
          <h2 className={styles.contacth2}>您的資料</h2>
          <div className={styles.inputwid}>
          <input className={styles.inputField} type="text" placeholder="姓名" />
          <input
            className={styles.inputField}
            type="email"
            placeholder="電子郵件"
          />
          <input className={styles.inputField} type="text" placeholder="主題" />
          <textarea
            className={styles.myTextarea}
            name="fieldname"
            placeholder="內容"
          />
          </div>
          <button className={styles.mybutton}>送出</button>
        </div>
      </div>
    </>
  );
}
