import * as types from './actionTypes';

//actions for movies
export function getAllMoviesAction() {
  return {
    type: types.GET_ALL_MOVIES,
  };
}
// actions for searching
export function getSearchMoviesByTitleAction(searchText) {
  return {
    type: types.GET_SEARCH_MOVIES_BY_TITLE,
    searchText
  }
}

export function getSearchMoviesByGengreAction(searchText) {
  return {
    type: types.GET_SEARCH_MOVIES_BY_GENGRE,
    searchText
  }

}
// actions for Sorting data
export function getAllMoviesSortingByReleasedDateAction() {
  return{
    type: types.GET_ALL_MOVIES_BY_RELEASED_DATA,
  }
}

export function getAllMoviesSortingByRatingAction(){
  return {
    type: types.GET_ALL_MOVIES_BY_RATING,
  }
}