import * as types from './actionTypes';
import { call, takeEvery, put } from 'redux-saga/effects';
import { uploadIdMovieSuccsessAction, uploadIdMovieFailedAction } from './actions';

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

        

    } catch {
        console.log("Error in saga 2");
        yield put(uploadIdMovieFailedAction())
    }
}