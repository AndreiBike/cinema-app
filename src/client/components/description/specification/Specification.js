import React from 'react';
import PropTypes from 'prop-types';
import './Specification.module.css';

const Specification = (props) => {

  const {
    movie: {
      name,
      imageWay,
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
        <img src={imageWay} />
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
          <span className="specification-beautify year">{year}</span> year
          <span className="specification-beautify duration">{duration}</span> min
        </div>
        <p className="specification-text">
          {description}
        </p>
      </div>
    </div>
  )
}

Specification.propTypes = {
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

export default Specification;