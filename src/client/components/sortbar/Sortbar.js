import React from 'react';
import styles from './Sortbar.module.css';

const activeStyle = {
  backgroundColor: "#F65261"
}

const passiveStyle = {
  backgroundColor: "#424242"
}

const Sortbar = (props) => {
  return (
    <div className={styles.sortbar}>
      <label className={styles.label}>
        SORT BY
      </label>
      <button className={styles.releaseButton}
        style={props.sortByReleaseDate.status ? activeStyle : passiveStyle}
        onClick={props.clickReleaseDate}>
        <span>
          {props.sortByReleaseDate.label}
        </span>
      </button>

      <button className={styles.ratingButton}
        style={props.sortByRating.status ? activeStyle : passiveStyle}
        onClick={props.clickRating}>
        <span>
          {props.sortByRating.label}
        </span>
      </button>

    </div>
  )
}

export default Sortbar;