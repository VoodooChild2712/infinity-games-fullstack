import React from "react";
import styles from "../index.module.css";
import { Link } from "react-router-dom";
import Home from "../../home/index.jsx";
import Store from "../../store/index.jsx";
import Library from "../../library/index.jsx";
import ContactUs from "../../contact-us/index.jsx";
import AboutUs from "../../about-us/index.jsx";

const Aside = () => {
  return (
    <div className={styles.aside}>
      <div className={styles.asideTitleContainer}>
        <h1 className={styles.asideTitle}>INFINITY GAMES</h1>
      </div>
      <div className={styles.asideButtons}>
        <Link to={Home} className={styles.asideRef}>
          HOME
        </Link>
        <Link to={Store} className={styles.asideRef}>
          STORE
        </Link>
        <Link to={Library} className={styles.asideRef}>
          LIBRARY
        </Link>
        <Link to={ContactUs} className={styles.asideRef}>
          CONTACT US
        </Link>
        <Link to={AboutUs} className={styles.asideRef}>
          ABOUT US
        </Link>
      </div>
    </div>
  );
};

export default Aside;
