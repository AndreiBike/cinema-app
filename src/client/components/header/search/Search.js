import React from 'react';
import styles from './Search.module.css';
import PropTypes from 'prop-types';

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
        <button
          className={`${styles.titleButton}${ props.searchByTitle.status ? 'activeStyle' : 'passiveStyle' }`}
          onClick = {props.clickTitle}
        >
          {props.searchByTitle.label}
        </button>
        <button
          className={styles.gengreButton}
          style={props.searchByGengre.status ? activeStyle : passiveStyle}
          onClick = {props.clickGengre}
        >
          {props.searchByGengre.label}
        </button>
      </div>
    </div>
  )
}

Search.propTypes = {
  searchByGengre: PropTypes.shape({
    status: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
  })
}

Search.defaultProps = {
  searchByGengre: {
    status: true
  }
}

export default Search;