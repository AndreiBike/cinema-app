import { getAllMoviesSaga, getAllMoviesAsync} from './sessionSaga';
import * as types from './actionTypes';
import { takeEvery, call} from 'redux-saga/effects';
import fromGenerator from 'redux-saga-test';

describe("sessionSaga testing", () => {
  const assert = require('assert');
  const serverReply = 'reply';

  it("test #1 getAllMoviesSaga testing", () => {
    const gen = getAllMoviesSaga();
    assert.deepEqual(gen.next().value, takeEvery(types.UPLOAD_MOVIES, getAllMoviesAsync));
  });
});

