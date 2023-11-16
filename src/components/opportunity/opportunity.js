import React, { useEffect, useState, useRef } from "react";
import styles from "./opportunity.module.css";
import axios from "axios";
import Swal from "sweetalert2";

export default function Opportunity() {
  const [image, setImage] = useState([]);
  const fetchedRef = useRef(false);

  useEffect(() => {
    if (!fetchedRef.current) {
      const fetchImages = async () => {
        try {
          const response = await axios.get(
            "https://api.nasa.gov/mars-photos/api/v1/rovers/Opportunity/photos",
            {
              params: {
                earth_date: "2018-01-10",
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
    });
  };

  return (
    <>
      <div className={styles.bg3}>
        <div className={styles.container2}>
          <div className={styles.bg2img}>
            <span className={styles.bg2span}>拍攝日期:2018/01/10</span>
            <img
              src={image}
              alt="nasa"
              width="280px"
              height="180px"
              onClick={handMarsImg}
            />
            <span className={styles.bg2span}>圖片來源:NASA Open APIs</span>
          </div>
          <div className={styles.bg2div}>
            <h1 className={styles.bg2h1}>火星探測任務-機會者號</h1>
            <p className={styles.bg2p}>
              機會號(英語:Opportunity)，亦稱為機遇號或火星探測漫遊者-B(MER-B),有時官方會暱稱為Oppy,是一臺於2004年開始火星探測任務的地表探測車;也是NASA火星兩輛探測探測車中的一輛。它於2003年從地球發射,並於2004年1月25日地表UTC時間05:05(大約當地時間13:15)降落在子午線高原
              ，差不多也是在姐妹號精神號降落在另一個地方的三周後。
              機會號已經連續有效運作了超過原本設計(90日)30倍的時間;由於太陽能發電板被清潔乾淨,它能夠繼續執行大量對火星岩石的地質分析和地表描繪。
              任務的重點包括完成90個火星日的任務,發現了火星上的第一個隕石隔熱罩岩(在子午線高原),以及超過兩年的時間研究維多利亞撞擊坑。機會號驚險渡過2007年的沙塵暴,現位於奮鬥撞擊坑西邊的「Perseverance
              Valley」。
              火星探測漫遊者計劃由加州理工學院的下屬部門、位於帕薩迪納的噴射推進實驗室(JPL)負責管理。
              受到2018年6月至8月間火星全球性沙塵暴阻隔陽光的影響,機會號自6月12日起中斷和地球的通訊,進入低電量休眠狀態。控制中心在此後長達115個火星日間(逾三個月)無法得知機會號的行蹤與狀態,直到9月20日才經由火星偵察軌道衛星所傳回的影像確認其位置。然而,NASA始終未能恢復與機會號的聯繫。2019年2月13日,NASA正式宣布任務結束。
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
