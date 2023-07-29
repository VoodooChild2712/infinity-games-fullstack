import React from 'react'
import styles from "./index.module.css"

const Card = () => {
  return (
    <div className={styles.cardContainer}>
        <img className={styles.cardImage} src={""} alt="card-image" />
        <h1 className={styles.cardTitle}></h1>
        <h3 className={styles.rate}></h3>
    </div>
  )
}

export default Card