import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { moviesReducer } from './moviesReducer';
import { getAllMoviesSaga } from './sessionSaga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'movies',
  storage: storage,
  whitelist: ['moviesState']
}

const reducers = combineReducers({
  moviesState: moviesReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const reduxStore = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
const reduxPersistor = persistStore(reduxStore);
sagaMiddleware.run(getAllMoviesSaga);

export default () => {
  return ({
    reduxStore,
    reduxPersistor,
  });
};