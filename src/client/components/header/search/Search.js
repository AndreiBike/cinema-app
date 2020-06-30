import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import ToggleButton from '@root/client/components/shared/toggleButton/ToggleButton';
import './Search.module.css';

class Search extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      searchByTitle: {
        label: "TITLE",
      },
      searchByGengre: {
        label: "GENGRE",
      }
    }


    this.clickButton = (isTitleStatus) => {
      if (isTitleStatus) {
        this.props.changeSearchType({ searchBy: 'title' });
      } else {
        this.props.changeSearchType({ searchBy: 'genres' });
      }
    }

    this.clickSearch = () => {
      this.props.uploadMovies({
        effect: "searching",
        sortBy: this.props.sortBy,
        searchText: this.props.searchText,
        searchBy: this.props.searchBy,
        offset: 0,
      });
    }
  }

  componentDidMount() {
    this.props.uploadMovies({
      effect: "searching",
      sortBy: this.props.sortBy,
      searchText: this.props.match ? this.props.match.params.searchText : '',
      searchBy: "title",
      offset: 0,
    });
  }


  render() {
    let titleClass = cn({
      'title-button': true,
      'active': this.props.searchBy === 'title',
    });

    let gengreClass = cn({
      'gengre-button': true,
      'active': this.props.searchBy === 'genres',
    });

    return (
      <div className="search">
        <div className="search-input">
          <input value={this.props.searchText} onChange={(e) => { this.props.changeSearchText({ searchText: e.target.value }) }} className="search-input-field" type="search" placeholder="Search" />
          <Link to={`/search/${this.props.searchText}`}>
            <ToggleButton toggleClassName='search-input-button'
              toggleOnClick={this.clickSearch}
              toggleText='SEARCH'
            />
          </Link>
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