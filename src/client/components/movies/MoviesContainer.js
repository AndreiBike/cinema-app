import React from 'react';
import Movies from '@root/client/components/movies/Movies'

class MoviesContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [
        {
          id: 1,
          imageWay: 'poster.jpg',
          name: "Avengers: Infinity War",
          year: 2020,
          gengre: "Action & Adventure",
        },

        {
          id: 2,
          imageWay: 'poster.jpg',
          name: "Avengers: Infinity War",
          year: 2021,
          gengre: "Action & Adventure",
        },

        {
          id: 3,
          imageWay: 'poster.jpg',
          name: "Avengers: Infinity War",
          year: 2022,
          gengre: "Action & Adventure",
        },
      ]
      
      //movies:[],
    }
  }

  render() {
    return (
      <Movies movies = {this.state.movies}/>
    )
  }
}

export default MoviesContainer;

