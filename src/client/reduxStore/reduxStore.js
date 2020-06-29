import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { moviesReducer } from './moviesReducer';
import { getAllMoviesSaga } from './sessionSaga';
import { getIdMovieSaga} from './idMovieSaga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { idMovieReducer } from './idMovieReducer';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'movies',
  storage: storage,
  whitelist: ['movieIdState'],
}

const reducers = combineReducers({
  moviesState: moviesReducer,
  movieIdState: idMovieReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const reduxStore = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
const reduxPersistor = persistStore(reduxStore);
sagaMiddleware.run(getAllMoviesSaga);
sagaMiddleware.run(getIdMovieSaga);

export default () => {
  return ({
    reduxStore,
    reduxPersistor,
  });
};