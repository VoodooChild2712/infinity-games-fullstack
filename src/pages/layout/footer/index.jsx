import React from "react";
import styles from "../index.module.css";
import { Link } from "react-router-dom";
import ContactUs from "../../contact-us/index";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h1 className={styles.footerTitle}>INFINITY GAMES</h1>
      <Link to={ContactUs} className={styles.contactButton}>Contact Us</Link>
      <div className={styles.mediaRefs}></div>
    </div>
  );
};

export default Footer;
