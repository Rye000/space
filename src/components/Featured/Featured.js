import React, { useEffect, useState } from "react";
import styles from "./Featured.module.css";
// import { Link } from "react-router-dom";
import axios from "axios";
import Epic from "../epic/epic";
import Swal from "sweetalert2";

export default function Featured() {
  const [apodData, setApodData] = useState(null);
  const videoUrl =
    "https://images-assets.nasa.gov/video/JSC-Orion-2021-GA_infographic_animation4k/JSC-Orion-2021-GA_infographic_animation4k~orig.mp4";
  useEffect(() => {
    const fetchApodData = async () => {
      try {
        const response = await axios.get(
          "https://api.nasa.gov/planetary/apod",
          {
            params: {
              api_key: "zO7dkQKhyuuWC2uySL3k7w5wma8QRetT95bdvCT4",
            },
          }
        );
        setApodData(response.data);
      } catch (err) {
        console.error("err");
      }
    };
    fetchApodData();
  }, []);
  if (!apodData) {
    return <div>Loading...</div>;
  }

  const handBigimgClick = () => {
    Swal.fire({
      imageUrl: apodData.hdurl,
      imageWidth: "90%",
      imageHeight: "90%",
      imageAlt: "nasa",
      width: "1200px",
    });
  };

  return (
    <>
      <div className={styles.bg}>
        <div className={styles.newvideo}>
          <h3 className={styles.newh3}>精選影片</h3>
          <video
            className={styles.vdo}
         
            src={videoUrl}
            type="video/mp4"
            controls
          ></video>
        </div>

        <div className={styles.newimg}>
          <h3 className={styles.newh3}>最新圖片</h3>
          <div className={styles.newimg2}>
            <div className={styles.new1}>
              <img
                src={apodData.hdurl}
                alt="每日照片"
                onClick={handBigimgClick}
              />
              <div className={styles.newtext}>
                <h5 className={styles.imgtext}>每日天文照片</h5>
                <h6 className={styles.imgtext2}>拍攝時間:{apodData.date}</h6>
              </div>
              <button onClick={handBigimgClick} className={styles.morebutton}>
                查看更多
              </button>
            </div>
            <hr />
            <Epic />
          </div>
        </div>
      </div>
    </>
  );
}
