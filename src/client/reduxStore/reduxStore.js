import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {moviesReducer} from './moviesReducer';
import { searchReducer } from './searchReducer';
import { sortReducer } from './sortReducer';
import {getAllMoviesSaga} from './sessionSaga';


let getStore = () => {
  let sagaMiddleware = createSagaMiddleware();

  let reducers = combineReducers({
    moviesState: moviesReducer,
    searchState: searchReducer,
    sortState: sortReducer,
  });
  
  let reduxStore = createStore(reducers, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(getAllMoviesSaga);
  
  return reduxStore;  
}

export default getStore;