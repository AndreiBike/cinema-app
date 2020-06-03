import * as types from './actionTypes';

let initialState = {
  movies: [
    {
      id: 1,
      imageWay: './assets/poster.jpg',
      name: "Avengers 1: Infinity War",
      year: 2015,
      gengre: "Action 1 & Adventure",
      rating: 4.6,
      duration: 154,
      description: "Pulp Fiction is a 1994 American crime film written and directed by Quentin Tarantino; it is based on a story by Tarantino and Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The film's title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue."
    },

    {
      id: 2,
      imageWay: './assets/poster.jpg',
      name: "Avengers 2: Infinity War 2",
      year: 2013,
      gengre: "Action 2 & Adventure",
      rating: 4.5,
      duration: 154,
      description: "Pulp Fiction is a 1994 American crime film written and directed by Quentin Tarantino; it is based on a story by Tarantino and Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The film's title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue."
    },

    {
      id: 3,
      imageWay: './assets/poster.jpg',
      name: "Avengers 3: Infinity War 3",
      year: 2011,
      gengre: "Action 3 & Adventure",
      rating: 4.4,
      duration: 154,
      description: "Pulp Fiction is a 1994 American crime film written and directed by Quentin Tarantino; it is based on a story by Tarantino and Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The film's title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue."
    },

    {
      id: 6,
      imageWay: './assets/poster.jpg',
      name: "Avengers 4: Infinity War 3",
      year: 2021,
      gengre: "Action 4 & Adventure",
      rating: 4.3,
      duration: 154,
      description: "Pulp Fiction is a 1994 American crime film written and directed by Quentin Tarantino; it is based on a story by Tarantino and Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The film's title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue."
    },

    {
      id: 4,
      imageWay: './assets/poster.jpg',
      name: "Avengers 5: Infinity War 3",
      year: 2023,
      gengre: "Action 5 & Adventure",
      rating: 4.2,
      duration: 154,
      description: "Pulp Fiction is a 1994 American crime film written and directed by Quentin Tarantino; it is based on a story by Tarantino and Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The film's title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue."
    },

    {
      id: 5,
      imageWay: './assets/poster.jpg',
      name: "Avengers 6: Infinity War 3",
      year: 2001,
      gengre: "Action 6 & Adventure",
      rating: 4.1,
      duration: 154,
      description: "Pulp Fiction is a 1994 American crime film written and directed by Quentin Tarantino; it is based on a story by Tarantino and Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The film's title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue."
    },
  ]
}

export function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_MOVIES:
      return {
        ...state
      }
    default:
      return state;
  }
}
