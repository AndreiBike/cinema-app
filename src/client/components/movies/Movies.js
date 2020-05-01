import React from 'react';
import styles from './Movies.module.css';
import MovieContainer from './Movie/MovieContainer';


const Movies = (props) => {

  if (props.movies.length === 0) {
    return (
      <div className={styles.emptyMovies}>
        <span>No films found </span>
      </div>
    )
  }
  else {

    let moviesList = props.movies.map((movie)=> {
      return (
        <MovieContainer key = {movie.id} movie= {movie} />
      )
    })

    return (
      <div className={styles.movies}>
        {moviesList}
      </div>
    )
  }
}

export default Movies;
