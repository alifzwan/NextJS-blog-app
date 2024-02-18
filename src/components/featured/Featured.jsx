import React from 'react'
import styles from "./featured.module.scss"
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Alif Dev here! </b> 
        Discover my stories and creative idea
      </h1>
      <div className={styles.posts}>

      
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
        </div>


        <div className={styles.textContainer}>
            <h1 className={styles.postsTitle}>Full-Stack Blog App Tutorial</h1>
            <p className={styles.postsDescription}>
              Next.js MongoDB Blog App Project Next.js MongoDB Blog App Project Next.js MongoDB Blog App Project Next.js MongoDB Blog App Project Full Course Next.js MongoDB Blog App Project Full Course Next.js MongoDB Blog App Project Full Course
            </p>
            <button className={styles.button}>Read More</button>
        </div>

      </div>
    </div>
  )
}

export default Featured