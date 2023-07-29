import React, { useState } from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import Home from "../../home/index";
import Store from "../../store/index";
import Library from "../../library/index";
import ContactUs from "../../contact-us/index";
import AboutUs from "../../about-us/index";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles["burger-menu"]}>
      <div
        className={`${styles.burger} ${isOpen ? styles.open : ""}`}
        onClick={handleMenuToggle}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {isOpen && (
        <div className={styles.modal}>
          <Link className={styles.modalRef} to={Home}>Home</Link>
          <Link className={styles.modalRef} to={Store}>Store</Link>
          <Link className={styles.modalRef} to={Library}>Library</Link>
          <Link className={styles.modalRef} to={ContactUs}>Contact us</Link>
          <Link className={styles.modalRef} to={AboutUs}>About us</Link>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
