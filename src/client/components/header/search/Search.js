import React from 'react';
import './Search.module.css';
import cn from 'classnames';
import ToggleButton from '../../shared/toggleButton/ToggleButton';

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
  }

  clickTitle() {
    this.setState((prevState) => {
      let updState = JSON.parse(JSON.stringify(prevState));
      updState.searchByTitle.status = true;
      updState.searchByGengre.status = false;
      return updState;
    });
  }

  clickGengre() {
    this.setState((prevState) => {
      let updState = JSON.parse(JSON.stringify(prevState));
      updState.searchByTitle.status = false;
      updState.searchByGengre.status = true;
      return updState;
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
          <input type="search" placeholder="Search" />
          <button> SEARCH </button>
        </div>

        <div className="search-choise">
          <label>SEARCH BY</label>

          <ToggleButton toggleClassName={titleClass}
            toggleOnClick={() => this.clickTitle()}
            toggleText={this.state.searchByTitle.label}
          />

          <ToggleButton toggleClassName={gengreClass}
            toggleOnClick={() => this.clickGengre()}
            toggleText={this.state.searchByGengre.label}
          />
        </div>
      </div>
    )
  }
}

export default Search;