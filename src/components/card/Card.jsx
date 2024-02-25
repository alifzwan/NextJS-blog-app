import React from 'react'
import styles from "./card.module.scss"
import Image from 'next/image'
import Link from 'next/link'

const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>

        <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>

        <div className={styles.textContainer}>
            <div className={styles.details}>
                <span className={styles.date}>11.02.2023 - </span>
                <span className={styles.category}>Culture</span>
            </div>
            <Link href="/">
                <h1>{item.title}</h1>
            </Link>

            <p className={styles.description}>Next.js MongoDB Blext.js MongoDB Blext.js MongoDB Bl
            ext.js MongoDB Blext.js MongoDB Blext.js MongoDB Blv
            vext.js MongoDB Blvext.js MongoDB Blext.js MongoDB Bl
            </p>
            
            <Link href="/" className={styles.link}>Read More</Link>
        </div>
    </div>
  )
}

export default Card