import React from 'react'
import styles from "./menuPosts.module.scss"
import Link from 'next/link'
import Image from 'next/image'

const MenuPosts = ({withImage}) => {
  return (
        <div className={styles.items}>
            <Link href="/" className={styles.item}>

                {withImage && (
                <div className={styles.imageContainer}>
                  <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
                )}

                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.travel}`}>
                      Travel
                    </span>

                    <h3 className={styles.postTitle}>
                      React Next.js full-stack app project for beginners. Next.js 13 App router full course with MongoDB 
                    </h3>

                    <div className={styles.details}>
                      <span className={styles.username}>John Doe</span>
                      <span className={styles.date}> - 10.03.2023</span>
                    </div>
                </div>
            </Link>
            <Link href="/" className={styles.item}>

                {withImage &&(
                <div className={styles.imageContainer}>
                  <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
                )}

                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.culture}`}>
                      Culture
                    </span>

                    <h3 className={styles.postTitle}>
                      React Next.js full-stack app project for beginners. Next.js 13 App router full course with MongoDB 
                    </h3>

                    <div className={styles.details}>
                      <span className={styles.username}>John Doe</span>
                      <span className={styles.date}> - 10.03.2023</span>
                    </div>
                </div>
            </Link>

            <Link href="/" className={styles.item}>

                {withImage && (
                <div className={styles.imageContainer}>
                  <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
                )}

                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.food}`}>
                      Food
                    </span>

                    <h3 className={styles.postTitle}>
                      React Next.js full-stack app project for beginners. Next.js 13 App router full course with MongoDB 
                    </h3>

                    <div className={styles.details}>
                      <span className={styles.username}>John Doe</span>
                      <span className={styles.date}> - 10.03.2023</span>
                    </div>
                </div>
            </Link>

            <Link href="/" className={styles.item}>

                {withImage && (
                <div className={styles.imageContainer}>
                  <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
                )}

                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.fashion}`}>
                      Fashion
                    </span>

                    <h3 className={styles.postTitle}>
                      React Next.js full-stack app project for beginners. Next.js 13 App router full course with MongoDB 
                    </h3>

                    <div className={styles.details}>
                      <span className={styles.username}>John Doe</span>
                      <span className={styles.date}> - 10.03.2023</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MenuPosts