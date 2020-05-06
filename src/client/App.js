import React from 'react';
import FooterContainer from '@root/client/components/footer/FooterContainer'
import HeaderContainer from '@root/client/components/header';
import SortbarContainer from '@root/client/components/sortbar/SortbarContainer';
import MoviesContainer from '@root/client/components/movies/MoviesContainer';
import ErrorBoundary from '@root/client/components/errorBoundary/ErrorBoundary';
import DescriptionContainer from '@root/client/components/description/DescriptionContainer';

import './App.module.css';

const App = (props)=> {
    return (
      <div className="app">
        <div className="content">
        <ErrorBoundary>
          <HeaderContainer /> 
          <DescriptionContainer />
          <SortbarContainer />
          <MoviesContainer />
          <FooterContainer />
        </ErrorBoundary>
        </div>
      </div>
    )
}

export default App;
