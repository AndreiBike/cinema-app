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
    this.clickGengre = this.clickGengre.bind(this);
    this.clickTitle = this.clickTitle.bind(this);
  }

  clickTitle() {
    this.setState((prevState) => {
      const { searchByTitle, searchByGengre } = prevState;
      return {
        searchByTitle: { ...searchByTitle, status: true },
        searchByGengre: { ...searchByGengre, status: false }
      }
    });
  }

  clickGengre() {
    this.setState((prevState) => {
      const { searchByTitle, searchByGengre } = prevState;
      return {
        searchByTitle: { ...searchByTitle, status: false },
        searchByGengre: { ...searchByGengre, status: true }
      }
    }
    );
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
          <input className = "search-input-field" type="search" placeholder="Search" />
          <button className = "search-input-button"> SEARCH </button>
        </div>

        <div className="search-choise">
          <label className="search-by-label">SEARCH BY</label>

          <ToggleButton toggleClassName={titleClass}
            toggleOnClick={this.clickTitle}
            toggleText={this.state.searchByTitle.label}
          />

          <ToggleButton toggleClassName={gengreClass}
            toggleOnClick={this.clickGengre}
            toggleText={this.state.searchByGengre.label}
          />
        </div>
      </div>
    )
  }
}

export default Search;