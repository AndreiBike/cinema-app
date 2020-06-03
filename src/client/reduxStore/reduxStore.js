import {createStore, combineReducers} from 'redux';
import {moviesReducer} from './moviesReducer';
import { searchReducer } from './searchReducer';
import { sortReducer } from './sortReducer';

let reducers = combineReducers({
  moviesState: moviesReducer,
  searchState: searchReducer,
  sortState: sortReducer,
});

let reduxStore = createStore(reducers);

export default reduxStore;