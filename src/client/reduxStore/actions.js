import * as types from './actionTypes';

//Uploading movies
export function uploadMoviesAction(effect,sortBy, searchText, searchBy,offset) {
  return {
    type: types.UPLOAD_MOVIES,
    effect,
    sortBy,
    searchText, 
    searchBy,
    offset,
  }
}

export function uploadMoviesSuccsessAction(reseivedMovies,total,effect,sortBy, searchText,searchBy,offset) {
  return {
    type: types.UPLOAD_MOVIES_SUCCSESS,
    reseivedMovies,
    total,
    effect,
    sortBy,
    searchText,
    searchBy,
    offset
  }
}

export function uploadMoviesFailedAction() {
  return {
    type: types.UPLOAD_MOVIES_FAILED
  }
}
/*
//Uploading search movies
export function uploadSearchMoviesAction(searchInformation){
  return {
    type: types.UPLOAD_SEARCH_MOVIES,
    searchInformation,
  }
}

export function uploadSearchMoviesSuccsessAction(reseivedMovies) {
  return {
    type: types.UPLOAD_SEARCH_MOVIES_SUCCSESS,
    reseivedMovies,
  }
}

export function uploauploadSearchMoviesFailedAction() {
  return {
    type: types.UPLOAD_SEARCH_MOVIES_FAILED,
  }
}
*/
























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