import Link from "next/link";
import styles from "./page.module.scss";
import React from 'react'
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";


const Home = () => {
  return (
    <div className={styles.container}>  
      <Featured />
      <CategoryList />
      <div className={styles.container}>
        <CardList />
        <Menu />
      </div>
    </div>
  )
}

export default Home