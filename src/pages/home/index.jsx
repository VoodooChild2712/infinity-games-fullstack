import React from 'react'
import styles from "./index.module.css";
import Carousel from '../components/carousel/index';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Carousel />
      </div>
    </div>
  )
}

export default Home