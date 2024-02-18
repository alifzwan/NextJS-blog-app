import React from 'react'
import styles from "./themetoggle.module.scss"
import Image from 'next/image'

const ThemeToggle = () => {
  return (
    <div className={styles.container}>
      <Image src="/moon.png" alt="moon" width={20} height={20} />
      <div className={styles.ball}></div>
      <Image src="/sun.png" alt="sun" width={20} height={20} />

    </div>
  )
}

export default ThemeToggle