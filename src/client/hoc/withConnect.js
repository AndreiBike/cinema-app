import {connect} from 'react-redux';
import { uploadMoviesAction } from '@root/client/reduxStore/actions';
import { changeSearchTextAction, changeSearchTypeAction } from '../reduxStore/actions';

export const withConnect = (Component) => {

  const mapStateToProps = (state) => {
    return {
      effect: state.moviesState.effect,
      movies: state.moviesState.movies,
      isLoading: state.moviesState.isLoading,
      sortBy: state.moviesState.sortBy,
      searchText: state.moviesState.searchText,
      searchBy: state.moviesState.searchBy,
      offset: state.moviesState.offset,
      total: state.moviesState.total,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      uploadMovies: (effect, sortBy, searchText, searchBy, offset) => { dispatch(uploadMoviesAction(effect, sortBy, searchText, searchBy, offset)) },
      changeSearchText: (searchText) => {dispatch(changeSearchTextAction(searchText))},
      changeSearchType: (searchBy) => {dispatch(changeSearchTypeAction(searchBy))}
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(Component);
} 