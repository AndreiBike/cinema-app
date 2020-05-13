import React from 'react';
import './Footer.module.css';

const Footer = (props) => {

  const {
    footerLabels:{
      netflixRoulette,
    }
  } = props;

  return (
    <div className="footer">
      <span className="footer-bold-text">{netflixRoulette[0]}</span>{netflixRoulette[1]}
    </div>
  )
}

export default Footer;