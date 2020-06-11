import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {moviesReducer} from './moviesReducer';
import {getAllMoviesSaga} from './sessionSaga';

let sagaMiddleware = createSagaMiddleware();

  let reducers = combineReducers({
    moviesState: moviesReducer,
  });
  
  let reduxStore = createStore(reducers, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(getAllMoviesSaga);

export default reduxStore;