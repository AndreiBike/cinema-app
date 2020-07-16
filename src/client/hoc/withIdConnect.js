import { connect } from 'react-redux';
import { uploadIdMovieAction } from '@root/client/reduxStore/actions';

export const withIdConnection = (Component) => {

    const mapStateToProps = (state) => ({
        isLoading: state.movieIdState.isLoading,
        movie: state.movieIdState.movie,
    });

    const mapDispatchToProps = (dispatch) => ({
        uploadIdMovie: (id) => { dispatch(uploadIdMovieAction(id)); }
    })

    return connect(mapStateToProps, mapDispatchToProps)(Component);
}
