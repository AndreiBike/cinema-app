import React from 'react';
import Search from '@root/client/components/header/search/Search'
import headerPicture from '@root/client/images/headerPicture.jpg';
import cn from 'classnames';
import './Header.module.css';

export class Header extends React.Component {

  render() {
    return (
      <div className="header">
        <div className="header-netflixroulette">
          <span>NETFLIX</span>ROULETTE
        </div>
        <div className="header-find-your-movie">
          FIND YOUR MOVIE
        </div>
        <Search />
      </div>
    )
  }
}

