import React from 'react'
import styles from "./comments.module.scss"
import Link from 'next/link'
import Image from 'next/image'

const Comments = () => {
    const status = "authenticated"
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            Comments
        </div>


        {status === "authenticated" ? (
            <div className={styles.write}>
                <textarea placeholder='Write a comment...' className={styles.input} />
                <button className={styles.button}>Send</button>
            </div>
        ) : (
            <Link href="/login">Login to write a comment</Link>
        )}



        <div className={styles.comments}>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/logo.png" width={50} height={50} className={styles.image}/>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}>01.10.2001</span>
                    </div>
                </div>
                <p className={styles.description}>
                    Styles, Layouts, Containers Styles, Layouts, Containers 
                    Styles, Layouts, Containers Styles, Layouts, Containers 
                    Styles, Layouts, Containers Styles, Layouts, Containers 
                    Styles, Layouts, Containers Styles, Layouts, Containers 
                    Styles, Layouts, Containers Styles, Layouts, Containers 
                </p>
            </div>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/logo.png" width={50} height={50} className={styles.image}/>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}>01.10.2001</span>
                    </div>
                </div>
                <p className={styles.description}>
                    Styles, Layouts, Containers Styles, Layouts, Containers 
                    Styles, Layouts, Containers Styles, Layouts, Containers 
                    Styles, Layouts, Containers Styles, Layouts, Containers 
                    Styles, Layouts, Containers Styles, Layouts, Containers 
                    Styles, Layouts, Containers Styles, Layouts, Containers 
                </p>
            </div>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/logo.png" width={50} height={50} className={styles.image}/>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}>01.10.2001</span>
                    </div>
                </div>
                <p className={styles.description}>
                    Styles, Layouts, Containers Styles, Layouts, Containers 
                    Styles, Layouts, Containers Styles, Layouts, Containers 
                    Styles, Layouts, Containers Styles, Layouts, Containers 
                    Styles, Layouts, Containers Styles, Layouts, Containers 
                    Styles, Layouts, Containers Styles, Layouts, Containers 
                </p>
            </div>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/logo.png" width={50} height={50} className={styles.image}/>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}>01.10.2001</span>
                    </div>
                </div>
                <p className={styles.description}>
                    Styles, Layouts, Containers Styles, Layouts, Containers 
                    Styles, Layouts, Containers Styles, Layouts, Containers 
                    Styles, Layouts, Containers Styles, Layouts, Containers 
                    Styles, Layouts, Containers Styles, Layouts, Containers 
                    Styles, Layouts, Containers Styles, Layouts, Containers 
                </p>
            </div>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/logo.png" width={50} height={50} className={styles.image}/>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}>01.10.2001</span>
                    </div>
                </div>
                <p className={styles.description}>
                    Styles, Layouts, Containers Styles, Layouts, Containers 
                    Styles, Layouts, Containers Styles, Layouts, Containers 
                    Styles, Layouts, Containers Styles, Layouts, Containers 
                    Styles, Layouts, Containers Styles, Layouts, Containers 
                    Styles, Layouts, Containers Styles, Layouts, Containers 
                </p>
            </div>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/logo.png" width={50} height={50} className={styles.image}/>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}>01.10.2001</span>
                    </div>
                </div>
                <p className={styles.description}>
                    Styles, Layouts, Containers Styles, Layouts, Containers 
                    Styles, Layouts, Containers Styles, Layouts, Containers 
                    Styles, Layouts, Containers Styles, Layouts, Containers 
                    Styles, Layouts, Containers Styles, Layouts, Containers 
                    Styles, Layouts, Containers Styles, Layouts, Containers 
                </p>
            </div>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/logo.png" width={50} height={50} className={styles.image}/>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}>01.10.2001</span>
                    </div>
                </div>
                <p className={styles.description}>
                    Styles, Layouts, Containers Styles, Layouts, Containers 
                    Styles, Layouts, Containers Styles, Layouts, Containers 
                    Styles, Layouts, Containers Styles, Layouts, Containers 
                    Styles, Layouts, Containers Styles, Layouts, Containers 
                    Styles, Layouts, Containers Styles, Layouts, Containers 
                </p>
            </div>
        </div>

         
    </div>
  )
}

export default Comments