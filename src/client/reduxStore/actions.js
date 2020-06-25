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