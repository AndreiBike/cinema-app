import React from 'react';
import { useState } from 'react';
import cn from 'classnames';
import ToggleButton from '@root/client/components/shared/toggleButton/ToggleButton';
import './Sortbar.module.css';


const Sortbar = (props) => {

  let initialState = {
    sortMode: true,
    sortBy: props.sortBy,
    sortByReleaseDate: {
      label: "RELEASE DATE",
    },
    sortByRating: {
      label: "RATING",
    },
  }

  const [state, setState] = useState(initialState);

  const clickButton = (isRatingStatus) => {
    props.uploadMovies('sorting',
      isRatingStatus ? 'vote_average' : 'release_date',
      props.searchText,
      props.searchBy,
      0,
      props.total)
  }

  let releaseClass = cn({
    "release-button": true,
    "active": (props.sortBy === 'release_date'),
  });

  let ratingClass = cn({
    "rating-button": true,
    "active": (props.sortBy === 'vote_average'),
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

export default Sortbar;
