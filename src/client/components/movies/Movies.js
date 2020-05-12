import React from 'react';
import { getAllMovies } from '@root/client/store/store';
import Movie from '@root/client/components/movies/Movie/Movie'
import './Movies.module.css'
import Preloader from '../shared/preloader/Preloader';

class Movies extends React.Component {

  constructor() {
    super();
    this.isUnmount = false;
    this.isLoading = true;
    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    this.isLoading = true;
    getAllMovies().then((mov) => {
      if (this.isUnmount === false) {
        this.setState({ movies: [...mov] });
      }
    });
    this.isLoading = false;
  }

  componentWillUnmount() {
    this.isUnmount = true;
  }

  render() {

    if (this.state.movies.length === 0) {
      if (this.isLoading === true) {
        return (
          <div className ="empty-movies">
            <Preloader />
          </div>
        )
      } else {
        return (
          <div className="empty-movies">
            <span>No films found </span>
          </div>
        )
      }
    }
    else {

      let moviesList = this.state.movies.map((movie) => {
        return (
          <Movie key={movie.id} movie={movie} />
        )
      })

      return (
        <div className="movies">
          {moviesList}
        </div>
      )
    }

  }
}

export default Movies;