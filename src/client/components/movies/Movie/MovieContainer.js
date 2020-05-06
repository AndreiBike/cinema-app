import React from 'react';
import Movie from '@root/client/components/movies/movie/Movie';

class MovieContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      id: props.movie.id,
      imageWay: props.movie.imageWay,
      name: props.movie.name,
      year: props.movie.year,
      gengre: props.movie.gengre,
    }
  }

  render() {
    return (
      <>
        <Movie id = {this.state.id}
               imageWay = {this.state.imageWay}
               name = {this.state.name}
               year = {this.state.year}
               gengre = {this.state.gengre}
        />
      </>
    )
  }
}

export default MovieContainer