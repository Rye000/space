import React from "react";
import styles from "./Task.module.css";

export default function Task() {
  return (
    <>
      <div className={styles.bg}>
        <h1>Free Website Templates的任務</h1>
        <h4>
          這個網站模板是由{" "}
          <u>
            <a
              href="https://freewebsitetemplates.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Free Website Templates
            </a>
          </u>{" "}
          免費提供的設計的。您可以將這個對這個模板進行規劃創作,例如api的串接,切板等
        </h4>
      </div>
    </>
  );
}
