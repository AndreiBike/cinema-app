import * as types from './actionTypes';

const initialState = {
  isLoading: false,
  movie: {
    id: 0,
    name: '',
    imageWay: '',
    rating: 0,
    gengre: '',
    year: 0,
    duration: 0,
    description: ''
  }
}

export function idMovieReducer(state = initialState, action) {
  switch (action.type) {

    case types.UPLOAD_ID_MOVIE:
      return {
        ...state,
        isLoading: true,
      }

    case types.UPLOAD_ID_MOVIE_SUCCSESS:
      return {
        isLoading: false,
        movie: {
          id: action.payload.response.id,
          name: action.payload.response.title,
          imageWay: action.payload.response.poster_path,
          rating: action.payload.response.vote_average,
          gengre: action.payload.response.genres.join(', '),
          year: Number.parseInt(action.payload.response.release_date.substr(0,4)),
          duration: action.payload.response.runtime,
          description: action.payload.response.overview,
        }
      }

    default:
      return state;
  }
}