import * as types from './actionTypes';

export function uploadMoviesFailedAction() {
  return {
    type: types.UPLOAD_MOVIES_FAILED
  }
}

export function uploadMoviesAction(payload) {
  return {
    type: types.UPLOAD_MOVIES,
    payload
  }
}

export function uploadMoviesSuccsessAction(payload) {
  return {
    type: types.UPLOAD_MOVIES_SUCCSESS,
    payload
  }
}

export function uploadIdMovieAction(payload) {
  return {
    type: types.UPLOAD_ID_MOVIE,
    payload
  }
}

export function uploadIdMovieSuccsessAction(payload) {
  return {
    type: types.UPLOAD_ID_MOVIE_SUCCSESS,
    payload
  }
}

export function uploadIdMovieFailedAction() {
  return {
    type: types.UPLOAD_ID_MOVIE_FAILED,
  }
}