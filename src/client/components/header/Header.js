import React from 'react';
import PropTypes from 'prop-types';
import Search from '@root/client/components/header/search/Search';
import { withConnect } from '@root/client/hoc/withConnect';
import './Header.module.css';

const SearchContainer = withConnect(Search);

const Header = (props) => {

  const {
    headerLabels: {
      netflixRoulette,
      findYourMovie,
    },
    match,
  } = props;

  return (
    <div className="header">
      <p className="header-netflixroulette">
        <span className="header-netflixroulette-bold">{netflixRoulette[0]}</span>{netflixRoulette[1]}
      </p>
      <div className="header-find-your-movie">
        {findYourMovie}
      </div>
      <SearchContainer match={match} />
    </div>
  );
}

Header.propTypes = {
  headerLabel: PropTypes.shape({
    netflixRoulette: PropTypes.arrayOf(PropTypes.oneOf(['netflix', 'roulette'])),
    findYourMovie: PropTypes.string
  }),
  match: PropTypes.object,
}

Header.defaultProps = {
  headerLabels: {
    netflixRoulette: ["netflix", "roulette"],
    findYourMovie: "find your movie",
  }
}

export default Header;