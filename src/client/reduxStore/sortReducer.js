import * as types from './actionTypes';

let initialState = {
  sortByReleaseDate: true,
  sortByRating: false,
}

export function sortReducer(state = initialState, action) {
  switch (action.type) {

    case types.GET_ALL_MOVIES_BY_RELEASED_DATA:
      return {
        sortByReleaseDate: true,
        sortByRating: false,
      }

    case types.GET_ALL_MOVIES_BY_RATING:
      return {
        sortByReleaseDate: false,
        sortByRating: true,
      }

    default: {
      return state;
    }
  }
}