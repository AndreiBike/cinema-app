import * as types from './actionTypes';
import { call, takeEvery, put } from 'redux-saga/effects';
import {getMoviesFromInet} from './sessionSaga';
import { uploadIdMovieSuccsessAction, uploadIdMovieFailedAction, uploadMoviesSuccsessAction} from './actions';

async function getIdMovieFromInet(id) {
    const response = await fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`);
    return response.json();
}

export function* getIdMovieSaga() {
    yield takeEvery(types.UPLOAD_ID_MOVIE, getIdMovieAsync);
}

function* getIdMovieAsync(action) {
    try {

        let response = yield call(() => getIdMovieFromInet(action.payload.id));
        yield put(uploadIdMovieSuccsessAction({
            response
        }));

        let moviesWithSameGenres = yield call(()=> getMoviesFromInet(action.payload.sortBy,
            response.genres[0],
            action.payload.searchBy,
            action.payload.offset));

        yield put(uploadMoviesSuccsessAction({
            reseivedMovies: moviesWithSameGenres.data,
            total: moviesWithSameGenres.total,
            effect: "description",
            sortBy: action.payload.sortBy,
            searchText: response.genres[0],
            searchBy: action.payload.searchBy,
            offset: action.payload.offset
          }
          ));

    } catch (e) {
        console.log(e);
        yield put(uploadIdMovieFailedAction())
    }
}