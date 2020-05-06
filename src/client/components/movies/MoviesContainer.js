import React from 'react';
import Movies from '@root/client/components/movies/Movies';
import {getAllMovies} from '@root/client/store/store';

class MoviesContainer extends React.Component {

  constructor() {
    super();
    this.isUnmount = false; 
    this.isLoading = false;
    this.state = {
      movies:[],
    }
  }

  componentDidMount(){
    getAllMovies().then((mov)=>{    
      if (this.isUnmount === false){
        this.setState({movies: [...mov]});
      }
    }); 
  }

  componentWillUnmount(){
    this.isUnmount = true;
    movies: [
      {
        id: 1,
        imageWay: './assets/poster.jpg',
        name: "Avengers: Infinity War",
        year: 2020,
        gengre: "Action & Adventure",
      },

      {
        id: 2,
        imageWay: './assets/poster.jpg',
        name: "Avengers: Infinity War",
        year: 2021,
        gengre: "Action & Adventure",
      },

      {
        id: 3,
        imageWay: './assets/poster.jpg',
        name: "Avengers: Infinity War",
        year: 2022,
        gengre: "Action & Adventure",
      },
    ]

    //movies:[],
  }

  render() {
    return (
      <Movies movies = {this.state.movies}
              isLoading = {this.isLoading}
      />
    );
  };
}

export default MoviesContainer;

