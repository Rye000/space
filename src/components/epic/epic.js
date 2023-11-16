import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./epic.module.css";
import Swal from "sweetalert2";

export default function Epic() {
  const [imageUrl, setImageUrl] = useState("");
  const [dateString, setDateString] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const fetchRandomEpicImage = async () => {
      const date = new Date();
      date.setDate(date.getDate() - 3);
      const newDateString = date.toISOString().substring(0, 10);

      try {
        const response = await axios.get(
          `https://api.nasa.gov/EPIC/api/natural/date/${newDateString}`,
          {
            params: { api_key: "zO7dkQKhyuuWC2uySL3k7w5wma8QRetT95bdvCT4" },
          }
        );

        if (isMounted && response.data.length > 0) {
          const images = response.data;
          const randomIndex = Math.floor(Math.random() * images.length);
          const image = images[randomIndex];
          const imageDate = image.date.replace(/-/g, "/").split(" ")[0];
          const newImageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${imageDate}/png/${image.image}.png`;

          setImageUrl(newImageUrl);
          setDateString(newDateString);
        }
      } catch (error) {
        if (isMounted) {
          console.error("Failed to fetch image:", error);
          setError("Failed to fetch image.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchRandomEpicImage();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return <div className={styles.loader}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  const handleEarthImg = () => {
    Swal.fire({
      imageUrl: imageUrl,
      background: "#000000",
      imageWidth: "90%",
      imageHeight: "90%",
      imageAlt: "nasa",
      width: "1000px",
    });
  };

  return (
    <div className={styles.new2}>
      <img src={imageUrl} alt="每日照片" onClick={handleEarthImg} />
      <div className={styles.newtext}>
        <h5 className={styles.imgtext}>地球照片</h5>
        <h6 className={styles.imgtext2}>拍攝時間:{dateString}</h6>
      </div>
      <button onClick={handleEarthImg} className={styles.morebutton}>
        查看更多
      </button>
    </div>
  );
}
