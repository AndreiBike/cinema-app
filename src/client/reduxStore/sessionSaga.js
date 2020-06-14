import * as types from './actionTypes'
import { call, takeEvery, put} from 'redux-saga/effects';
import { uploadMoviesSuccsessAction, uploadMoviesFailedAction } from './actions';

async function getMoviesFromInet(sortBy, searchText, searchBy, offset) {
  const response = await fetch(`https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=${'asc'}&search=${searchText}&searchBy=${searchBy}&offset=${offset}&limit=12`);
  console.log(offset);
  return response.json();
}

export function* getAllMoviesSaga() {
  yield takeEvery(types.UPLOAD_MOVIES, getAllMoviesAsync);
}

export function* getAllMoviesAsync(action) {
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
    console.log("Error in saga");
    yield put(uploadMoviesFailedAction());
  }
}
