import React from 'react'
import styles from "./footer.module.scss"
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.info}>

          <div className={styles.logo}>
            <Image src="/logo.png" alt="logo" width={35} height={35}/>
            <h1 className={styles.logoText}>Alif Zakwan</h1>
          </div>

          <p className={styles.description}>
            Next.js MongoDB Blog App Project Next.App Project Next.js MongoDB 
            Blog App Projroject Full Course Next.js MongoDB Blog App Proje
          </p>

          <div className={styles.social}>
            <Link href="/facebook">
              <Image src="/facebook.png"  alt="facebook"  width={15} height={15} />
            </Link>
            <Link href="/instagram">
              <Image src="/instagram.png" alt="instagram" width={15} height={15} />
            </Link>
            <Link href="/youtube">
              <Image src="/youtube.png"   alt="youtube"   width={15} height={15} />
            </Link>
          </div>
        </div>


        <div className={styles.links}>
            <div className={styles.lists}>
                <span className={styles.linkTitle}>Links</span>
                <Link href="/homepage">Homepage</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </div>


            <div className={styles.lists}>
                <span className={styles.linkTitle}>Tags</span>
                <Link href="/style">Style</Link>
                <Link href="/fashion">Fashion</Link>
                <Link href="/coding">Coding</Link>
                <Link href="/travel">Travel</Link>
            </div>

            <div className={styles.lists}>
                <span className={styles.linkTitle}>Social</span>
                <Link href="/facebook">Facebook</Link>
                <Link href="/instagram">Instagram</Link>
                <Link href="/youtube">Youtube</Link>
            </div>
        </div>



    </div>
  )
}

export default Footer