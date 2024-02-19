"use client";

import React from 'react'
import styles from "./themetoggle.module.scss"
import Image from 'next/image'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext';

const ThemeToggle = () => {
  
  const {theme, toggle} = useContext(ThemeContext)


  return (
    <div className={styles.container} onClick={toggle}
    style={
      theme === "dark" 
      ? {backgroundColor:"white"}
      : {backgroundColor:"#0f172a"}}>

      <Image src="/moon.png" alt="moon" width={20} height={20} />
        <div 
        className={styles.ball} 
        style={
          theme === "dark" 
          ? {left:1, background:"#0f172a"}
          : {right:1, background:"white"}}>

        </div>
      <Image src="/sun.png" alt="sun" width={20} height={20} />

    </div>
  )
}

export default ThemeToggle