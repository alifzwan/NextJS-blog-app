import React from 'react'
import styles from "./cardList.module.scss"
import Pagination from '../pagination/Pagination'

const CardList = () => {
  return (
    <div className={styles.container}>CardList
      <Pagination />
    </div>
  )
}

export default CardList