import React from 'react';
import PropTypes from 'prop-types';
import './Specification.module.css';

const Specification = (props) => {

  const {
    movie: {
      name,
      rating,
      gengre,
      year,
      duration,
      description
    }
  } = props;

  return (
    <div className="specification-container">
      <div className="specification-image">
        <img src="./assets/poster.jpg" />
      </div>
      <div className="specification-description">
        <div className="specification-name-rating">
          <span>{name}</span>
          <span>{rating}</span>
        </div>
        <div className="specification-short-description">
          {gengre}
        </div>
        <div className="specification-year-duration">
          <span className="specification-beautify"> {year} </span> year
          <span className="specification-beautify"> {duration} </span> min
        </div>
        <div className="specification-text">
          <p>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

Specification.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  rating: PropTypes.number,
  gengre: PropTypes.string,
  year: PropTypes.number,
  duration: PropTypes.number,
  description: PropTypes.string,
}

export default Specification;