import * as types from './actionTypes'
import { call, takeEvery, put } from 'redux-saga/effects';
import { uploadMoviesSuccsessAction, uploadMoviesFailedAction } from './actions';

export async function getMoviesFromInet(sortBy, searchText, searchBy, offset) {
  //console.log(`https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=${'asc'}&search=${searchText}&searchBy=${searchBy}&offset=${offset}&limit=12`)
  const response = await fetch(`https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=${'asc'}&search=${searchText}&searchBy=${searchBy}&offset=${offset}&limit=12`);
  return response.json();
}

export function* getAllMoviesSaga() {
  yield takeEvery(types.UPLOAD_MOVIES, getAllMoviesAsync);
}

export function* getAllMoviesAsync(action) {
  try {
    let response = yield call(() => getMoviesFromInet(action.payload.sortBy,
      action.payload.searchText,
      action.payload.searchBy,
      action.payload.offset));
    yield put(uploadMoviesSuccsessAction({
      reseivedMovies: response.data,
      total: response.total,
      effect: action.payload.effect,
      sortBy: action.payload.sortBy,
      searchText: action.payload.searchText,
      searchBy: action.payload.searchBy,
      offset: action.payload.offset
    }
    ));
  } catch {
    console.log("Error in saga");
    yield put(uploadMoviesFailedAction());
  }
}
