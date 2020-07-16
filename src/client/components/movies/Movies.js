import React from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import Movie from '@root/client/components/movies/Movie/Movie'
import Preloader from '@root/client/components/shared/preloader/Preloader';
import './Movies.module.css';
import { withIdConnection } from '../../hoc/withIdConnect';

const renderMovie = (movie) => {
  const MovieContainer = React.memo(withIdConnection(Movie));
  return <MovieContainer key={movie.id} movieDescription={movie} />
};

const Movies = (props) => {

  const {
    isLoading,
    movies,
    sortBy,
    searchText,
    searchBy,
    offset,
    total,
    uploadMovies,
  } = props;

  if (isLoading) {
    return (
      <div className="empty-movies">
        <Preloader />
      </div>
    )
  }

  if (movies.length) {
    let moviesList = movies.map(renderMovie);
    return (
      <InfiniteScroll
        dataLength={movies.length}
        next={React.memo(() => {
          uploadMovies({
            effect: "loading",
            sortBy: sortBy,
            searchText: searchText,
            searchBy: searchBy,
            offset: offset
          })
        })}
        hasMore={total > offset}
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

export default Movies;