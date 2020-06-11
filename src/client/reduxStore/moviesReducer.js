import * as types from './actionTypes';

let initialState = {
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
      for (let movie of action.reseivedMovies) {
        movies.push({
          id: movie.id,
          imageWay: movie.poster_path,
          name: movie.title,
          year: movie.release_date,
          gengre: movie.genres.join(', '),
          rating: movie.vote_average,
          duration: movie.runtime,
          description: movie.overview,
        })
      }
        return {
          searchText: action.searchText,
          searchBy: action.searchBy,
          sortBy: action.sortBy,
          offset: (action.effect === 'loading') ? state.offset += 9 : 9,
          total: action.total, 
          isLoading: false,
          movies: (action.effect === 'loading') ? state.movies.concat(movies) : movies,
      }
    default:
      return state;
  }
}
