import React from 'react';
import cn from 'classnames';
import { getSearchMoviesByTitleAction, getSearchMoviesByGengreAction } from '@root/client/reduxStore/actions'
import { connect } from 'react-redux';
import ToggleButton from '@root/client/components/shared/toggleButton/ToggleButton';
import './Search.module.css';

class SearchAPI extends React.Component {

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
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

    this.clickSearch = () => {
      let searchText = this.inputRef.current.value;
      if (this.state.searchByTitle.status) {
        this.props.getSearchMoviesByTitle(searchText);
      } else {
        this.props.getSearchMoviesByGengre(searchText);
      }
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

    let searchClass = cn({
      'search-input-button': true,
    })

    return (
      <div className="search">
        <div className="search-input">
          <input ref={this.inputRef} className="search-input-field" type="search" placeholder="Search" />
          <ToggleButton toggleClassName={searchClass}
            toggleOnClick={this.clickSearch}
            toggleText='SEARCH'
          />
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

let mapStateToProps = (state) => {
  return {
    search: state.searchState,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    getSearchMoviesByTitle: (searchText) => { dispatch(getSearchMoviesByTitleAction(searchText)) },
    getSearchMoviesByGengre: (searchText) => { dispatch(getSearchMoviesByGengreAction(searchText)) },
  }
}

let Search = connect(mapStateToProps, mapDispatchToProps)(SearchAPI);

export default Search;