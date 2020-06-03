import React from 'react';
import { connect } from 'react-redux';
import { getAllMovies } from '@root/client/store/store';
import Movie from '@root/client/components/movies/Movie/Movie'
import Preloader from '@root/client/components/shared/preloader/Preloader';
import './Movies.module.css'
import { getAllMoviesAction } from '../../reduxStore/actions';

class MoviesAPI extends React.Component {

  constructor(props) {
    super(props);
    this.isUnmount = false;
    this.state = {
      isLoading: false,
      //movies: this.props.movies,
    }
  }

  /*
  componentDidMount() {
    this.setState({ isLoading: true });
    getAllMovies().then((mov) => {
      if (this.isUnmount === false) {
        this.setState({ isLoading: false, movies: [...mov] });
      }
    });
  }
  */

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
    if (this.props.movies.length) {
      const renderMovie = (movie) => { return <Movie key={movie.id} movie={movie} /> }
      let moviesList = this.props.movies.map(renderMovie);
      return (
        <div className="movies">
          {moviesList}
        </div>
      )
    }
    return (
      <div className="empty-movies">
        <span>No films found </span>
      </div>
    )

  }
}

let mapStateToProps = (state) => {
  let findMovies = state.moviesState.movies.filter((movie) => {
    if (state.searchState.searchByTitle) {
      return movie.name.includes(state.searchState.searchText);
    } else {
      return movie.gengre.includes(state.searchState.searchText);
    }
  });

  findMovies.sort((movie_1, movie_2) => {
    if (state.sortState.sortByRating) {
      if (movie_1.rating > movie_2.rating) return 1;
      if (movie_1.rating == movie_2.rating) return 0;
      if (movie_1.rating < movie_2.rating) return -1;
    } else {
      if (movie_1.year > movie_2.year) return 1;
      if (movie_1.year == movie_2.year) return 0;
      if (movie_1.year < movie_2.year) return -1;
    }
  })

  return {
    movies: findMovies,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    getAllMovies: () => { dispatch(getAllMoviesAction()) }
  }
}

const Movies = connect(mapStateToProps, mapDispatchToProps)(MoviesAPI);
export default Movies;