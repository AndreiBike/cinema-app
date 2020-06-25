import React from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import Movie from '@root/client/components/movies/Movie/Movie'
import Preloader from '@root/client/components/shared/preloader/Preloader';
import './Movies.module.css'

class Movies extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.uploadMovies("loading",
      this.props.sortBy,
      this.props.searchText,
      this.props.searchBy,
      this.props.offset);
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
              this.props.offset)
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

export default Movies;