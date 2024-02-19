import React from 'react'
import styles from "./navbar.module.scss"
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'

const Navbar = () => {
  return (
    <div className={styles.container}>

        <div className={styles.social}>
          <Link href="/facebook">
            <Image src="/facebook.png"  alt="facebook"  width={30} height={30}></Image>
          </Link>
          <Link href="/instagram">
            <Image src="/instagram.png" alt="instagram" width={30} height={30}></Image>
          </Link>
          <Link href="/youtube">
            <Image src="/youtube.png"   alt="youtube"   width={30} height={30}></Image>
          </Link>
        </div>

        <div className={styles.logo}>
          Alif Zakwan
        </div>

        <div className={styles.links}>
            <ThemeToggle />
            <Link href="/" className={styles.links}>Homepage</Link>
            <Link href="/" className={styles.links}>Contact</Link>
            <Link href="/" className={styles.links}>About</Link>
            <Link href="/" className={styles.links}>Login</Link>
            <AuthLinks />
        </div>
    </div>
  )
}

export default Navbar