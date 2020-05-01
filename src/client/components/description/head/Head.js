import React from 'react';
import searchIcon from '@root/client/images/search.png';
import styles from './Head.module.css';

const Head = (props) => {
  return (
    <div className={styles.head}>
      <label className={styles.netflixRoulette}>
        NETFLIXROULETTE
        </label>
      <div className={styles.searchIcon}>
        <img src={searchIcon} />
      </div>
    </div>
  )
}

export default Head;