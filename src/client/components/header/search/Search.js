import React from 'react';
import styles from './Search.module.css';

const activeStyle = {
  backgroundColor: "#F65261"
}

const passiveStyle = {
  backgroundColor: "rgba(66,66,66,0.68)"
}


const Search = (props) => {
  return (
    <div className={styles.search}>
      <div className={styles.searchInput}>
        <input type="search" placeholder="Search" />
        <button> SEARCH </button>
      </div>

      <div className={styles.searchChoise}>
        <label>SEARCH BY</label>
        <button className={styles.titleButton}
          style={props.searchByTitle.status ? activeStyle : passiveStyle}
          onClick = {props.clickTitle}>{props.searchByTitle.label}</button>
        <button className={styles.gengreButton}
          style={props.searchByGengre.status ? activeStyle : passiveStyle}
          onClick = {props.clickGengre}
        >{props.searchByGengre.label}</button>
      </div>
    </div>
  )
}

export default Search;