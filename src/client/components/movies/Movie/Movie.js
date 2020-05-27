import React from 'react';
import "./Movie.module.css";

const Movie = (props) => {

  const {
    movie: {
      id,
      imageWay,
      name,
      year,
      gengre,
    }
  } = props;

  return (
    <div className="movie">
      <div className="movie-poster">
        <img src={imageWay} />
      </div>

      <div className="movie-filmname">
        <div>{name}</div>
        <div> {year} </div>
      </div>

      <div className="movie-gengre">
        {gengre}
      </div>
    </div>
  )
}

export default Movie;
