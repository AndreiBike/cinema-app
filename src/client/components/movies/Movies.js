import React from 'react';
import { getAllMovies } from '@root/client/store/store';
import Movie from '@root/client/components/movies/Movie/Movie'
import Preloader from '@root/client/components/shared/preloader/Preloader';
import './Movies.module.css'


class Movies extends React.Component {

  constructor() {
    super();
    this.isUnmount = false;
    this.state = {
      isLoading: false,
      movies: [],
    }
  }

  componentDidMount() {
    this.setState({isLoading: true});
    getAllMovies().then((mov) => {
      if (this.isUnmount === false) {
        this.setState({isLoading: false, movies: [...mov] });
      }
    });
  }

  componentWillUnmount() {
    this.isUnmount = true;
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="empty-movies">
          <Preloader />
        </div>
      )
    }
    if (this.state.movies.length) {
      const renderMovie = (movie) => { return <Movie key={movie.id} movie={movie} /> }
      let moviesList = this.state.movies.map(renderMovie);
      return (
        <div className="movies">
          {moviesList}
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
}

export default Movies;