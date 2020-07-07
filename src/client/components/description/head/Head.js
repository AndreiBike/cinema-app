import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import searchIcon from '@root/client/images/search.png'
import './Head.module.css'

const Head = (props) => {

  const {
    headerLabels: {
      netflixRoulette,
    },
    movie,
  } = props;

  return (
    <div className="head">
      <label className="head-netflix-roulette">
        <span className="head-netflix-roulette-bold">{netflixRoulette[0]}</span>{netflixRoulette[1]}
      </label>
      <div className="head-search-icon">
        <Link to={`/search/${movie.name}`} >
          <img src={searchIcon} />
        </Link>
      </div>
    </div>
  )
}

Head.propTypes = {
  headerLabels: PropTypes.object,
  movie: PropTypes.object,
}

Head.defaultProps = {
  headerLabels: {
    netflixRoulette: ["netflix", "roulette"],
  }
}

export default Head;