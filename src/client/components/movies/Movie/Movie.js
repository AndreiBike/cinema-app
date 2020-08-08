import React from 'react';
import "./Movie.module.css";
import { NavLink } from 'react-router-dom';
import {useRouter} from 'next/router';


const Movie = (props) => {
  const router = useRouter();
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
    <NavLink to={`/film/${id}`} onClick={() => {
      props.uploadIdMovie({
        id: id,
        searchBy: 'genres',
        sortBy: 'release_date',
        offset: 0,
      });

      if(!__isBrowser__) {
        router.push(`/film/${id}`);
      }
    }}>
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
    </NavLink>
  )
}

export default Movie;
