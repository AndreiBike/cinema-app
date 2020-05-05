import React from 'react';
import styles from './Header.module.css';
import SearchContainer from '@root/client/components/header/search/SearchContainer'
import headerPicture from '@root/client/images/headerPicture.jpg';


export const Header = (props) => {
  return (
    <div className={styles.header}>

    <div className = {styles.background}>
      <img src ={headerPicture} alt = "background image" />
    </div>

      <label className={styles.netflixRoulette}>
        NETFLIXROULETTE
      </label>
      <label className={styles.findYourMovie}>
        FIND YOUR MOVIE
      </label>
      <SearchContainer />
    </div>
  )
}