import React from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from "react-infinite-scroll-component";
import Movie from '@root/client/components/movies/Movie/Movie'
import Preloader from '@root/client/components/shared/preloader/Preloader';
import './Movies.module.css'
import { uploadMoviesAction } from '../../reduxStore/actions';

class MoviesAPI extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.uploadMovies("loading",
      this.props.sortBy,
      this.props.searchText,
      this.props.searchBy,
      this.props.offset,
      this.props.total);
  }

  render() {
    if (this.props.isLoading) {
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
        <InfiniteScroll
          dataLength={this.props.movies.length}
          next={() => {
            this.props.uploadMovies("loading",
              this.props.sortBy,
              this.props.searchText,
              this.props.searchBy,
              this.props.offset,
              this.props.total)
          }}
          hasMore={this.props.total>this.props.offset}
          loader={<Preloader />}>
          <div className="movies">
            {moviesList}
          </div>
        </InfiniteScroll>
      )
    }
    return (
      <div className="empty-movies">
        <span>No films found </span>
      </div>
    )

  }
}
/*
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
    isLoading: state.moviesState.isLoading,
  }
}
*/

let mapStateToProps = (state) => {
  return {
    movies: state.moviesState.movies,
    isLoading: state.moviesState.isLoading,
    sortBy: state.moviesState.sortBy,
    searchText: state.moviesState.searchText,
    searchBy: state.moviesState.searchBy,
    offset: state.moviesState.offset,
    total: state.moviesState.total,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    uploadMovies: (effect, sortBy, searchText, searchBy, offset) => { dispatch(uploadMoviesAction(effect, sortBy, searchText, searchBy, offset)) }
  }
}

const Movies = connect(mapStateToProps, mapDispatchToProps)(MoviesAPI);
export default Movies;