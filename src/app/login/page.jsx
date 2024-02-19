"use client"
import React from 'react'
import styles from "./loginPage.module.scss"
import Image from 'next/image'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'


const LoginPage = () => {

    const {data, status} = useSession()

    const router = useRouter()

    console.log(data, status)


    if (status === "loading") {
        return <div className={styles.loading}>Loading...</div>
    }
    if (status === "authenticated") {
        router.push("/")
    }
    
    
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.socialButton} onClick={() => signIn("google")}>
                    <Image src="/google.png" alt ="" width={50} height={50} className={styles.logo}/>
                    Sign in with Google
                </div>
                <div className={styles.socialButton}>
                <Image src="/github.png" alt ="" width={50} height={50} className={styles.logo}/>
                    Sign in with Github
                </div>
                <div className={styles.socialButton}>
                <Image src="/facebook.png" alt ="" width={50} height={50} className={styles.logo}/>
                    Sign in with Facebook
                </div>
            </div>
        </div>
    )
}

export default LoginPage