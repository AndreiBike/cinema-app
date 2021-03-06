import React from 'react';
import { useState } from 'react';
import cn from 'classnames';
import ToggleButton from '@root/client/components/shared/toggleButton/ToggleButton';
import './Sortbar.module.css';


const Sortbar = (props) => {

  let initialState = {
    sortMode: true,
    sortByReleaseDate: {
      label: "RELEASE DATE",
      status: true,
    },
    sortByRating: {
      label: "RATING",
      status: false,
    },
  }

  const [state, setState] = useState(initialState);

  const clickButton = (prevState, isRatingStatus) => {
    const { sortMode, sortByRating, sortByReleaseDate } = prevState;
    setState({
      sortMode,
      sortByRating: { ...sortByRating, status: isRatingStatus },
      sortByReleaseDate: { ...sortByReleaseDate, status: !isRatingStatus }
    });
  }

  let releaseClass = cn({
    "release-button": true,
    "active": state.sortByReleaseDate.status,
  });

  let ratingClass = cn({
    "rating-button": true,
    "active": state.sortByRating.status,
  })

  if (state.sortMode) {
    return (
      <div className="sortbar">
        <label>
          SORT BY
      </label>

        <ToggleButton toggleClassName={releaseClass}
          toggleOnClick={() => { clickButton(state, false) }}
          toggleText={state.sortByReleaseDate.label}
        />

        <ToggleButton toggleClassName={ratingClass}
          toggleOnClick={() => { clickButton(state, true) }}
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
