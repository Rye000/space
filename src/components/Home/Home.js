import React from "react";
import styles from "./Home.module.css";
import Nasa from "../Nasa/Nasa";
import Task from "../Task/Task";
import Featured from "../Featured/Featured";
import Swal from "sweetalert2";

export default function Home() {
  const handleReadMoreClick = () => {
    Swal.fire({
      title: "Free Website Templates",
      text: "Free Website Templates提供了多種模板,來讓我們可以進行切版練習",
      background: "#808080",
      color: "#ffffff",
      imageUrl: "/img/spaceicon2.png",
      imageWidth: 300,
      imageHeight: 300,
      confirmButtonText: "我知道了",
    });
  };
  return (
    <>
      <div className={styles.bg}>
        <div className={styles.container}>
          <div className={styles.spaceimg}>
            <img src="img/satellite.png" alt="nasa" />
            <div className={styles.spacerwd}>
              <h3 className={styles.spaceh3}>SOYUZ TMA-M</h3>
              <h2 className={styles.spaceh2}>太空船</h2>
              <div className={styles.read}>
                <button onClick={handleReadMoreClick}>閱讀更多</button>
              </div>
            </div>
          </div>

          <div className={styles.projece}>
            <h2 className={styles.projeceh2}>太空圖片</h2>
          </div>
          <Nasa />
        </div>
        <Task />
        <Featured />
      </div>
    </>
  );
}
