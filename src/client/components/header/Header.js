import React from 'react';
import PropTypes from 'prop-types';
import Search from '@root/client/components/header/search/Search';
import {withConnect} from '@root/client/hoc/withConnect';
import './Header.module.css';

const Header = (props) => {

  const SearchContainer = withConnect(Search);

  const {
    headerLabels: {
      netflixRoulette,
      findYourMovie,
    }
  } = props;

  return (
    <div className="header">
      <p className="header-netflixroulette">
        <span className="header-netflixroulette-bold">{netflixRoulette[0]}</span>{netflixRoulette[1]}
      </p>
      <div className="header-find-your-movie">
        {findYourMovie}
      </div>
      <SearchContainer />
    </div>
  );
}

Header.propTypes = {
  headerLabels: PropTypes.object,
}

Header.defaultProps = {
  headerLabels: {
    netflixRoulette: ["netflix","roulette"],
    findYourMovie: "find your movie",
  }
}

export default Header;