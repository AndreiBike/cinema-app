import React from 'react';
import Head from './head/Head'
import Specification from './specification/Specification'
import './Description.module.css'
import { getMovieById } from "@root/client/store/store"

class Description extends React.Component {

  constructor(props) {
    super(props);
    this.isUnmount = false;
    this.state = {
      movie: {
        id: 1,
        name: "Avengers infinity war",
        rating: 4.3,
        gengre: "Action & Adventure",
        year: 1994,
        duration: 154,
        description: "Pulp Fiction is a 1994 American crime film written and directed by Quentin Tarantino; it is based on a story by Tarantino and Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The film's title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue."
      }
    }
  }

  componentDidMount() {
    getMovieById(2).then((mov) => {
      if (this.isUnmount === false) {
        this.setState({
          movie: mov
        })
      }
    })
  }

  componentWillUnmount() {
    this.isUnmount = true;
  }

  render() {
    return (
      <div className="description">
        <Head />
        <Specification movie={this.state.movie} />
      </div>
    )
  }
}

export default Description;
