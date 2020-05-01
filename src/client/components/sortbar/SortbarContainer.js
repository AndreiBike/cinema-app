import React from 'react';
import Sortbar from '@root/client/components/sortbar/Sortbar.js'

class SortbarContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      sortByReleaseDate: {
        label: "RELEASE DATE",
        status: true,
      },

      sortByRating: {
        label: "RATING",
        status: false,
      },
    }
  }

  clickRating() {
    this.setState((prevState)=>{
      let updState = JSON.parse(JSON.stringify(prevState));
      updState.sortByRating.status = true;
      updState.sortByReleaseDate.status = false;
      return updState;
    });
  }

  clickReleaseDate() {
    this.setState((prevState)=>{
      let updState = JSON.parse(JSON.stringify(prevState));
      updState.sortByRating.status = false;
      updState.sortByReleaseDate.status = true;
      return updState;
    }
    );
  }

  render() {
    return (
      <Sortbar sortByReleaseDate={this.state.sortByReleaseDate}
               sortByRating={this.state.sortByRating}
               clickRating = {() => {this.clickRating()}}
               clickReleaseDate = {() => {this.clickReleaseDate()}}
      />
    )
  }
}

export default SortbarContainer;
