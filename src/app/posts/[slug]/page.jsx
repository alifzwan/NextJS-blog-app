import React from 'react'
import styles from "./singlePage.module.scss"
import Menu from '@/components/menu/Menu'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'

const SinglePage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>

            <div className={styles.textContainer}>

                <h1 className={styles.title}>Next.js MongoDB Blog App Project Full Course</h1>

                <div className={styles.user}>
                    <div className={styles.userImageContainer}>
                      <Image src="/p1.jpeg" alt="" fill className={styles.avatar}/>
                    </div>
                    
                    <div className={styles.userTextContainer}>
                      <span className={styles.username}>John Doe</span>
                      <span className={styles.date}>01.01.2024</span>
                    </div>
                </div>
            </div>

            <div className={styles.imageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>
        </div>



        <div className={styles.content}>
              <div className={styles.post}>
                  <div className={styles.description}>
                    
                      <h2>Next.js MongoDB Blog App Project</h2>
                      <p>Next.js MongoDB Blog App Project Full CourseNext.js 
                        MongoDB Blog App Project Full CourseNext.js 
                        MongoDB Blog App Project Full Course
                      </p>
                      <h2>Next.js MongoDB Blog App Project</h2>
                      <p>Next.js MongoDB Blog App Project Full CourseNext.js 
                        MongoDB Blog App Project Full CourseNext.js 
                        MongoDB Blog App Project Full Course
                      </p>
                      <h2>Next.js MongoDB Blog App Project</h2>
                      <p>Next.js MongoDB Blog App Project Full CourseNext.js 
                        MongoDB Blog App Project Full CourseNext.js 
                        MongoDB Blog App Project Full Course
                      </p>
                  </div>
                  
                  <div className={styles.comments}>
                    <Comments />
                  </div>
              </div>

              <Menu />
        </div>
    </div>
  )
}

export default SinglePage