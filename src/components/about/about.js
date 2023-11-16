import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import styles from "./about.module.css";
import Swal from "sweetalert2";
import Opportunity from "../opportunity/opportunity";

export default function About() {
  const [image, setImage] = useState([]);
  const fetchedRef = useRef(false);

  useEffect(() => {
    if (!fetchedRef.current) {
      const fetchImages = async () => {
        try {
          const response = await axios.get(
            "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos",
            {
              params: {
                earth_date: "2023-01-10",
                api_key: "zO7dkQKhyuuWC2uySL3k7w5wma8QRetT95bdvCT4",
              },
            }
          );
          const randomImage =
            response.data.photos[
              Math.floor(Math.random() * response.data.photos.length)
            ];
          setImage(randomImage.img_src);
        } catch (err) {
          console.error("Error fetching images: ", err);
        }
      };
      fetchImages();
      fetchedRef.current = true;
    }
  }, []);

  const handMarsImg = () => {
    Swal.fire({
      imageUrl: image,
      // background: "#000000",
      imageWidth: "90%",
      imageHeight: "90%",
      imageAlt: "nasa",
      width: "1000px",
      height: "10px",
    });
  };
  return (
    <>
      <div className={styles.bg}>
        <div className={styles.container}>
          <h1 className={styles.abouth1}>關於</h1>
          <h2 className={styles.abouth2}>火星探測的任務</h2>
          <p className={styles.aboutp}>
            火星探測,是指人類通過向火星發射空間探測器,對火星進行的科學探測活動。從1960年代開始,人類使用望遠鏡觀測火星。1965年7月14日,美國水手4號探測器在火星上空掠過火星,成為第一枚掠過火星並發回探測數據的探測器。
            1971年12月2日,蘇聯火星3號(Mars
            3)的登陸器成功在火星軟著陸,成為第一個抵達火星的探測器,並在火星表面發出共14.5秒長的信號,隨後便失去了信號。1976年9月3日,美國海盜1號的登陸器在火星表面軟著陸,成為第一個向地球發回照片的探測器。2021年5月15日,祝融號登陸火星,中國成為第二個成功在火星上運行火星探測車的國家。
          </p>
        </div>
      </div>
      <div className={styles.bg2}>
        <div className={styles.container2}>
          <div className={styles.bg2div}>
            <h1 className={styles.bg2h1}>火星探測任務-好奇者號</h1>
            <p className={styles.bg2p}>
              好奇號(英語:Curiosity)是一輛美國國家航空暨太空總署火星科學實驗室轄下的火星探測車,主要任務是探索火星的蓋爾撞擊坑,為美國國家航空暨太空總署火星科學實驗室計劃的一部份。
              好奇號在2011年11月26日北美東部標準時間10:02於卡納維爾角空軍基地進入火星科學實驗室太空飛行器,並成功在2012年8月6日協調世界時05:17於伊奧利亞沼著陸。好奇號經過56,300萬公里的旅程,著陸時離預定著陸點布雷德伯里著陸場只相差2.4公里。
              好奇號的任務包括：探測火星氣候及地質,探測蓋爾撞擊坑內的環境是否曾經能夠支持生命,探測火星上的水,及研究日後人類探索的可行性。
              好奇號的設計將是計畫中的火星2020探測車任務設計基礎。2012年12月,好奇號原本執行2年的探測任務被無限期延長。
              2014年6月24日,好奇號在發現火星上曾經有適合微生物生存的環境之後執行滿一個火星年的探測任務。
              2018年11月12日,由地球24名科學家組成的團隊,利用延遲15分鐘指令發送,控制與駕駛距地球約1億2,600萬公里的好奇號,駛往預定位,。
            </p>
          </div>
          <div className={styles.bg2img}>
            <span className={styles.bg2span}>拍攝日期:2023/01/10</span>
            <img
              src={image}
              alt="nasa"
              width="280px"
              height="180px"
              onClick={handMarsImg}
            />
            <span className={styles.bg2span}>圖片來源:NASA Open APIs</span>
          </div>
        </div>
      </div>
      <Opportunity />
    </>
  );
}
