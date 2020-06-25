import * as types from './actionTypes';

const initialState = {
  searchText: '',
  searchBy: 'title',
  sortBy: 'release_date',
  offset: 0,
  total: 0,
  isLoading: false,
  movies: []
}

export function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_MOVIES:
      return {
        ...state
      }

    case types.UPLOAD_MOVIES:
      return {
        ...state,
        isLoading: !state.movies.length,
      }

    case types.UPLOAD_MOVIES_SUCCSESS:
      let movies = [];
      for (let movie of action.payload.reseivedMovies) {
        movies.push({
          id: movie.id,
          imageWay: movie.poster_path,
          name: movie.title,
          year: Number.parseInt(movie.release_date.substr(0,4)),
          gengre: movie.genres.join(', '),
          rating: movie.vote_average,
          duration: movie.runtime,
          description: movie.overview,
        })
      }
      return {
        searchText: action.payload.searchText,
        searchBy: action.payload.searchBy,
        sortBy: action.payload.sortBy,
        offset: (action.payload.effect === 'loading') ? state.offset += 12 : 12,
        total: action.payload.total,
        isLoading: false,
        movies: (action.payload.effect === 'loading') ? state.movies.concat(movies) : movies,
      }

    case types.UPLOAD_MOVIES_FAILED:
      return state;
    default:
      return state;
  }
}
