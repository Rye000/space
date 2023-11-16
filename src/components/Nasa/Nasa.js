import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import styles from "./Nasa.module.css";

export default function Nasa() {
  const [images, setImages] = useState([]);
  const fetchedRef = useRef(false);

  useEffect(() => {
    if (!fetchedRef.current) {
      const fetchImages = async () => {
        try {
          const response = await axios.get(
            "https://api.nasa.gov/planetary/apod",
            {
              params: {
                api_key: "zO7dkQKhyuuWC2uySL3k7w5wma8QRetT95bdvCT4",
                count: 4,
              },
            }
          );
          setImages(response.data.map((img) => img.url));
        } catch (err) {
          console.error("Error fetching images: ", err);
        }
      };
      fetchImages();
      fetchedRef.current = true;
    }
  }, []);

  const handleImageClick = (imageUrl) => {
    Swal.fire({
      imageUrl: imageUrl,
      // background: "#000000",
      imageWidth: "90%",
      imageHeight: "90%",
      imageAlt: "NASA Image",
      width: "1000px",
    });
  };

  return (
    <>
      <ul className={styles.nasaul}>
        {images.map((imgSrc, index) => (
          <li
            key={index}
            className={styles.nasaimg}
            onClick={() => handleImageClick(imgSrc)}
          >
            <img src={imgSrc} alt={`NASA`} />
          </li>
        ))}
      </ul>
    </>
  );
}
