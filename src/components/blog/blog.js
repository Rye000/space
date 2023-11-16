import React from "react";
import styles from "./blog.module.css";

export default function Blog() {
  return (
    <>
      <div className={styles.bg}>
        <h1 className={styles.blogh1}>部落格</h1>
        <div className={` ${styles.blog} container-fluid`}>
          <div className={`row`}>
            <div className={`col`}></div>
            <div className={` col-12  col-xl-8  `}>
              <div className={`row`}>
             
                <div className={` col-12  col-xl-8  ${styles.text1}`}>
                  <img src="/img/astronaut.jpg" alt="nasa" />
                  <h3 className={styles.blogh3}>
                    THIS IS JUST A PLACE HOLDER.
                  </h3>
                  <h6 className={styles.blogh6}>FEBRUARY 6, 2023</h6>
                  <p className={styles.blogh6}>
                    This website template has been designed by Free Website
                    Templates for you, for free. You can replace all this text
                    with your own text.
                  </p>
                  <div className={styles.btn}>
                    <button>查看更多</button>
                  </div>
                  <hr />
                  {/*  */}
                  <img src="/img/satellite-dish.jpg" alt="nasa" />
                  <h3 className={styles.blogh3}>
                    THIS IS JUST A PLACE HOLDER.
                  </h3>
                  <h6 className={styles.blogh6}>FEBRUARY 6, 2023</h6>
                  <p className={styles.blogh6}>
                    This website template has been designed by Free Website
                    Templates for you, for free. You can replace all this text
                    with your own text.
                  </p>
                  <div className={styles.btn}>
                    <button>查看更多</button>
                  </div>
                </div>
                <div className={` col-xl-4 ${styles.text2}`}>
                  <h3 className={styles.chosen}>FEATURED POSTS</h3>
                  <img src="/img/moon-satellite.jpg" alt="nasa" />
                  <h3 className={styles.recent2}>SOYUZ TMA-M</h3>
                  <span className={styles.chosenspan}>FEBRUARY 1, 2023</span>
                  <hr />
                  <h2 className={styles.recent}>RECENT POSTS</h2>
                  <div className={styles.chosen2}>
                    <img src="img/alien-life.jpg" alt="nasa" />
                    <div>
                      <h2 className={styles.chosen2h2}>ALIEN LIFE</h2>
                      <span className={styles.chosenspan}>
                        FEBRUARY 1, 2023
                      </span>
                    </div>
                  </div>
                  <hr />
                  <div className={styles.chosen2}>
                    <img src="img/galaxy.jpg" alt="nasa" />
                    <div>
                      <h2 className={styles.chosen2h2}>THE GALAXY</h2>
                      <span className={styles.chosenspan}>
                        FEBRUARY 1, 2023
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`col`}></div>
          </div>
        </div>
      </div>
    </>
  );
}
