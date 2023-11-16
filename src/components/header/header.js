import React, { useState } from "react";
import styles from "./header.module.css";
import { useLocation, Link } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/About";
  const isProject = location.pathname === "/Project";
  const isBlog = location.pathname === "/Blog";
  const isCooperate = location.pathname === "/Cooperate";

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  const handleLinkClick = () => {
    setIsMenuVisible(false); 
  };

  return (
    <>
      <div className={styles.bg}>
        <div className={styles.headerbg}>
          <div className={styles.logo}>
            <Link to="/">
              <img src="img/logo.png" alt="logo" onClick={handleLinkClick} />
              
            </Link>
            

            <ul className={`${styles.hederul} `}>
              <li className={isHome ? styles.current : null} >
                <Link to="/" >首頁</Link>
              </li>
              <li className={isAbout ? styles.current : null}>
                <Link to="/About">關於</Link>
              </li>
              <li className={isProject ? styles.current : null}>
                <Link to="/Project">專案</Link>
              </li>
              <li className={isBlog ? styles.current : null}>
                <Link to="/Blog">部落格</Link>
              </li>
              <li className={isCooperate ? styles.current : null}>
                <Link to="/Cooperate">合作</Link>
              </li>
            </ul>
          </div>

          <i
            className={`fa-solid fa-bars ${styles.headericon}`}
            onClick={toggleMenu}
          ></i>
         
      
        </div>
      </div>
      <div className={styles.bg2}>
      <ul className={`${styles.hederulrwd} ${isMenuVisible ? styles.show : ''}`}>
              <li className={isHome ? styles.current : null} onClick={handleLinkClick}>
                <Link to="/">首頁</Link>
              </li>
              <hr />
              <li className={isAbout ? styles.current : null} onClick={handleLinkClick}>
                <Link to="/About">關於</Link>
              </li>
              <hr />

              <li className={isProject ? styles.current : null} onClick={handleLinkClick}> 
                <Link to="/Project">專案</Link>
              </li>
              <hr />

              <li className={isBlog ? styles.current : null} onClick={handleLinkClick}>
                <Link to="/Blog">部落格</Link>
              </li>
              <hr />

              <li className={isCooperate ? styles.current : null} onClick={handleLinkClick}>
                <Link to="/Cooperate">合作</Link>
              </li>
            </ul>
</div>
    </>
  );
}
