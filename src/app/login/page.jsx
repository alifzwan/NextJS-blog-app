import React from 'react'
import styles from "./loginPage.module.scss"
import Image from 'next/image'

const LoginPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.socialButton}>
                <Image src="/google.png" width={50} height={50} className={styles.logo}/>
                Sign in with Google
            </div>
            <div className={styles.socialButton}>
               <Image src="/github.png" width={50} height={50} className={styles.logo}/>
                Sign in with Github
            </div>
            <div className={styles.socialButton}>
            <Image src="/facebook.png" width={50} height={50} className={styles.logo}/>
                Sign in with Facebook
            </div>
        </div>
    </div>
  )
}

export default LoginPage