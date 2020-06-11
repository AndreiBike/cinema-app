import axios from 'axios';
import * as types from './actionTypes'
import { call, takeEvery, put, takeLatest } from 'redux-saga/effects';
import { uploadMoviesSuccsessAction, uploadMoviesFailedAction } from './actions';

function getMoviesFromInet(sortBy, searchText, searchBy, offset) {
  return axios.get(`https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=${'asc'}&search=${searchText}&searchBy=${searchBy}&offset=${offset}&limit=9`).then((response) => {
    return response.data;
  })
}

export function* getAllMoviesSaga() {
  yield takeEvery(types.UPLOAD_MOVIES, getAllMoviesAsync);
}

function* getAllMoviesAsync(action) {
  try {
    let response = yield call(() => getMoviesFromInet(action.sortBy,
      action.searchText,
      action.searchBy,
      action.offset));
    yield put(uploadMoviesSuccsessAction(response.data,
      response.total,
      action.effect,
      action.sortBy,
      action.searchText,
      action.searchBy,
      action.offset
    ));
  } catch {
    yield put(uploadMoviesFailedAction());
  }
}
