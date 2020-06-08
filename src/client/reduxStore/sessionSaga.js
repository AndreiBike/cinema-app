import axios from 'axios';
import * as types from './actionTypes'
import {call, takeEvery} from 'redux-saga/effects';
import { getAllMoviesAction } from './actions';

function getMoviesFromInet() {
    axios.get('https://reactjs-cdp.herokuapp.com/movies').then((data) => {
      debugger;
    })
}

export function* getAllMoviesSaga() {
  yield takeEvery(types.GET_ALL_MOVIES, getAllMoviesAsync);
}

function* getAllMoviesAsync(action) {
  try{
    let data = yield call(getMoviesFromInet);
    console.log(data);
    yield put(getAllMoviesAction());
  } catch {
    yield put(getAllMoviesAction());
  }
}