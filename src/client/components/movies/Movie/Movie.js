import React from 'react';
import "./Movie.module.css"

class Movie extends React.Component {

  constructor(props) {
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
        <div className="movie">
          <div className="movie-poster">
            <img src={this.state.imageWay} />
          </div>

          <div className="movie-filmname">
            <div>{this.state.name}</div>
            <div> {this.state.year} </div>
          </div>

          <div className="movie-gengre">
            {this.state.gengre}
          </div>
        </div>
      </>
    )
  }
}

export default Movie;