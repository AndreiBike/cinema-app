import React from 'react';
import { useState } from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';
import { getAllMoviesSortingByReleasedDateAction, getAllMoviesSortingByRatingAction } from '@root/client/reduxStore/actions';
import ToggleButton from '@root/client/components/shared/toggleButton/ToggleButton';
import './Sortbar.module.css';


const SortbarAPI = (props) => {

  let initialState = {
    sortMode: true,
    sortByReleaseDate: {
      label: "RELEASE DATE",
    },
    sortByRating: {
      label: "RATING",
    },
  }

  const [state, setState] = useState(initialState);

  const clickButton = (isRatingStatus) => {
    if (isRatingStatus) {
      props.sortMoviesByRating();
    } else {
      props.sortMoviesByReleaseDate();
    }
  }

  let releaseClass = cn({
    "release-button": true,
    "active": props.sortState.sortByReleaseDate
  });

  let ratingClass = cn({
    "rating-button": true,
    "active": props.sortState.sortByRating
  })

  if (state.sortMode) {
    return (
      <div className="sortbar">
        <label>
          SORT BY
      </label>

        <ToggleButton toggleClassName={releaseClass}
          toggleOnClick={() => { clickButton(false) }}
          toggleText={state.sortByReleaseDate.label}
        />

        <ToggleButton toggleClassName={ratingClass}
          toggleOnClick={() => { clickButton(true) }}
          toggleText={state.sortByRating.label}
        />
      </div>
    )
  }

  return (
    <div className="sortbar">
      <div className="sortbar-same-gengre">
        Films by Drama gengre
        </div>
    </div>
  )
}

let mapStateToProps = (state) => {
  return {
    sortState: state.sortState,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sortMoviesByReleaseDate: () => { dispatch(getAllMoviesSortingByReleasedDateAction()) },
    sortMoviesByRating: () => { dispatch(getAllMoviesSortingByRatingAction()) },
  }
}

let Sortbar = connect(mapStateToProps, mapDispatchToProps)(SortbarAPI)

export default Sortbar;
