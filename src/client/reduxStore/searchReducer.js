import * as types from './actionTypes';

let initialState = {
  searchText: '',
  searchByTitle: true,
  searchByGengre: false,
}

export function searchReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_SEARCH_MOVIES_BY_GENGRE:
      return {
        searchText: action.searchText,
        searchByTitle: false,
        searchByGengre: true,
      }
    case types.GET_SEARCH_MOVIES_BY_TITLE:
      return {
        searchText: action.searchText,
        searchByTitle: true,
        searchByGengre: false,
      }
    default:
      return state;
  }
}