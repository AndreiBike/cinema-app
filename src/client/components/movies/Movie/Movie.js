import React from 'react';
import "./Movie.module.css";
import { Link } from 'react-router-dom';
import {withIdConnection} from '@root/client/hoc/withIdConnect'


const Movie = (props) => {
  const {
    movieDescription: {
      id,
      imageWay,
      name,
      year,
      gengre,
    }
  } = props;

  return (
    <Link to={`/film/${id}`} onClick = {()=> {props.uploadIdMovie({id: id})}}>
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
