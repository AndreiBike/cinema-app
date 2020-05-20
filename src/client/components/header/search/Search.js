import React from 'react';
import cn from 'classnames';
import ToggleButton from '@root/client/components/shared/toggleButton/ToggleButton';
import './Search.module.css';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchByTitle: {
        label: "TITLE",
        status: true,
      },
      searchByGengre: {
        label: "GENGRE",
        status: false,
      }
    }

    this.clickButton = (isTitleStatus) => {
      this.setState((prevState) => {
        const { searchByTitle, searchByGengre } = prevState;
        return {
          searchByTitle: { ...searchByTitle, status: isTitleStatus },
          searchByGengre: { ...searchByGengre, status: !isTitleStatus }
        }
      })
    }
  }

  render() {

    let titleClass = cn({
      'title-button': true,
      'active': this.state.searchByTitle.status,
    });

    let gengreClass = cn({
      'gengre-button': true,
      'active': this.state.searchByGengre.status,
    })

    return (
      <div className="search">
        <div className="search-input">
          <input className="search-input-field" type="search" placeholder="Search" />
          <button className="search-input-button"> SEARCH </button>
        </div>

        <div className="search-choise">
          <label className="search-by-label">SEARCH BY</label>

          <ToggleButton toggleClassName={titleClass}
            toggleOnClick={() => { this.clickButton(true) }}
            toggleText={this.state.searchByTitle.label}
          />

          <ToggleButton toggleClassName={gengreClass}
            toggleOnClick={() => { this.clickButton(false) }}
            toggleText={this.state.searchByGengre.label}
          />
        </div>
      </div>
    )
  }
}

export default Search;