import React from 'react';
import style from './App.module.css';
import FooterContainer from '@root/client/components/footer/FooterContainer'
import HeaderContainer from '@root/client/components/header/HeaderContainer';
import SortbarContainer from '@root/client/components/sortbar/SortbarContainer';
import MoviesContainer from '@root/client/components/movies/MoviesContainer';
import ErrorBoundary from '@root/client/components/errorBoundary/ErrorBoundary';
import DescriptionContainer from '@root/client/components/description/DescriptionContainer';


const App = (props)=> {
    return (
      <div className = {style.app}>
        <div className = {style.content}>
        <ErrorBoundary>
         { <HeaderContainer /> }
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
