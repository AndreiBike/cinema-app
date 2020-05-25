import React from 'react'
import PropTypes from 'prop-types';
import searchIcon from '@root/client/images/search.png'
import './Head.module.css'

const Head = (props) => {

  const {
    headerLabels: {
      netflixRoulette,
    }
  } = props;

  return (
    <div className="head">
      <label className="head-netflix-roulette">
          <span className="head-netflix-roulette-bold">{netflixRoulette[0]}</span>{netflixRoulette[1]}
        </label>
      <div className="head-search-icon">
        <img src={searchIcon}/>
      </div>
    </div>
  )
}

Head.propTypes = {
  headerLabels: PropTypes.object,
}

Head.defaultProps = {
  headerLabels: {
    netflixRoulette: ["netflix", "roulette"],
  }
}

export default Head;