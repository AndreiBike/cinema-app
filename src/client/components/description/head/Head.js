import React from 'react';
import searchIcon from '@root/client/images/search.png';
import './Head.module.css';

const Head = (props) => {
  return (
    <div className="head">
      <label className="head-netflix-roulette">
        NETFLIXROULETTE
        </label>
      <div className="head-search-icon">
        <img src={searchIcon} />
      </div>
    </div>
  )
}

export default Head;