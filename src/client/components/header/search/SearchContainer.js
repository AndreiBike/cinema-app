import React from 'react';
import Search from '@root/client/components/header/search/Search';

class SearchContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchByTitle: {
        label: "TITLE",
        status: true,
      },

      searchByGengre:{
        label:  "GENGRE",
        status: false,
      }
    }
  }

  clickTitle() {
    this.setState((prevState)=>{
      let updState = JSON.parse(JSON.stringify(prevState));
      updState.searchByTitle.status = true;
      updState.searchByGengre.status = false;
      return updState;
    });
  }

  clickGengre() {
    this.setState((prevState)=>{
      let updState = JSON.parse(JSON.stringify(prevState));
      updState.searchByTitle.status = false;
      updState.searchByGengre.status = true;
      return updState;
    }
    );
  }

  render(){
    return(
      <Search searchByTitle = {this.state.searchByTitle}
        searchByGengre = {this.state.searchByGengre}
        clickTitle = {() => {this.clickTitle()} }
        clickGengre = {() => {this.clickGengre()}}
      />
    )
  }
}

export default SearchContainer;