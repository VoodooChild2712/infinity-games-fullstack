import { React, useState } from "react";
import styles from "../index.module.css";
import { Link } from "react-router-dom";
import Register from "../../register/index";
import Login from "../../login/index";
import BurgerMenu from "../../components/burger-menu";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <BurgerMenu />
      <div className={styles.navTitleContainer}>
        <h1 className={styles.navTitle}>INFINITY GAMES</h1>
      </div>
      <div className={styles.navButtons}>
        <Link to={Login} className={styles.loginButton}>Login</Link>
        <Link to={Register} className={styles.registerButton}>Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
