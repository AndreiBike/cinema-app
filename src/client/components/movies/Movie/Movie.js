import React from 'react';
import "./Movie.module.css";
import { Link } from 'react-router-dom';

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
    <Link to={`/film/${id}`}>
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
    </Link>
  )
}

export default Movie;
