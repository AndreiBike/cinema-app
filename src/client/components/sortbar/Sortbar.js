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
    props.uploadMovies({
      effect: 'sorting',
      sortBy: isRatingStatus ? 'vote_average' : 'release_date',
      searchText: props.searchText,
      searchBy: props.searchBy,
      offset: 0,
      total: props.total
    })
  }

  if (state.sortMode) {
    return (
      <div className="sortbar">
        <label>
          SORT BY
      </label>

        <ToggleButton toggleClassName={cn({
          "release-button": true,
          "active": (props.sortBy === 'release_date'),
        })}
          toggleOnClick={() => { clickButton(false) }}
          toggleText={state.sortByReleaseDate.label}
        />

        <ToggleButton toggleClassName={cn({
          "rating-button": true,
          "active": (props.sortBy === 'vote_average'),
        })}
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
