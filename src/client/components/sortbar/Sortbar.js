import React from 'react';
import cn from 'classnames';
import ToggleButton from '../shared/toggleButton/ToggleButton';
import { useState } from 'react';
import './Sortbar.module.css';


const Sortbar = (props) => {

  function clickRating(prevState) {
    let updState = JSON.parse(JSON.stringify(prevState));
    updState.sortByRating.status = true;
    updState.sortByReleaseDate.status = false;
    setState(updState);
  }

  function clickReleaseDate(prevState) {
    let updState = JSON.parse(JSON.stringify(prevState));
    updState.sortByRating.status = false;
    updState.sortByReleaseDate.status = true;
    setState(updState);
  }

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
          toggleOnClick={() => { clickReleaseDate(state) }}
          toggleText={state.sortByReleaseDate.label}
        />

        <ToggleButton toggleClassName={ratingClass}
          toggleOnClick={() => { clickRating(state) }}
          toggleText={state.sortByRating.label}
        />

      </div>
    )
  } else {
    return(
      <div className = "sortbar">
        <div className = "sortbar-same-gengre">
          Films by Drama gengre
        </div>
      </div>
    )
  }
}

export default Sortbar;