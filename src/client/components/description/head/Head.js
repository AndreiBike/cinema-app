import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import searchIcon from '@root/client/images/search.png';
import { useRouter } from 'next/router';
import './Head.module.css'

const Head = (props) => {
  const router = useRouter();
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
        <Link to={`/search/${movie.name}`} onClick={() => {
          if (!__isBrowser__) {
            router.push(`/search/${movie.name}`);
          }
        }

        }>
          <img src={searchIcon} />
        </Link>
      </div>
    </div>
  )
}

Head.propTypes = {
  headerLabel: PropTypes.shape({
    netflixRoulette: PropTypes.arrayOf(PropTypes.oneOf(['netflix', 'roulette'])),
    findYourMovie: PropTypes.string
  }),
  movie: PropTypes.shape({
    name: PropTypes.string,
    imageWay: PropTypes.string,
    rating: PropTypes.number,
    gengre: PropTypes.string,
    year: PropTypes.number,
    duration: PropTypes.number,
    description: PropTypes.string,
  }),
}

Head.defaultProps = {
  headerLabels: {
    netflixRoulette: ["netflix", "roulette"],
  }
}

export default Head;