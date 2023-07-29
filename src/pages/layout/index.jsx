import React from "react";
import styles from "./index.module.css";
import Navbar from "./navbar";
import { Outlet } from "react-router";
import Footer from "./footer";

const Layout = () => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
      ;
    </div>
  );
};

export default Layout;
