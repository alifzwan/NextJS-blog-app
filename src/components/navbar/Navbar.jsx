import React from 'react'
import styles from "./navbar.module.scss"
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/ThemeToggle'

const Navbar = () => {
  return (
    <div className={styles.container}>

      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={30} height={30}></Image>
        <Image src="/instagram.png" alt="instagram" width={30} height={30}></Image>
        <Image src="/tiktok.png" alt="tiktok" width={30} height={30}></Image>
        <Image src="/youtube.png" alt="youtube" width={30} height={30}></Image>
      </div>

      <div className={styles.logo}>
        Alif Zakwan
      </div>

      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/">Homepage</Link>
        <Link href="/login">Contact</Link>
        <Link href="/about">About</Link>
        <Link href="/login">Login</Link>
      </div>



    </div>
  )
}

export default Navbar