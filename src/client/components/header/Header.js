import React from 'react';
import Search from '@root/client/components/header/search/Search'
import './Header.module.css';

export const Header = (props) => {

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
      <Search />
    </div>
  );
}