import React from 'react';
import ScrollUpButton from "react-scroll-up-button";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import reduxPersistStore from '@root/client/reduxStore/reduxStore';
import Footer from '@root/client/components/footer/Footer';
import Header from '@root/client/components/header/Header';
import Sortbar from '@root/client/components/sortbar/Sortbar';
import Movies from '@root/client/components/movies/Movies';
import ErrorBoundary from '@root/client/components/errorBoundary/ErrorBoundary';
import Description from '@root/client/components/description/Description';
import { withConnect } from '@root/client/hoc/withConnect';
import './App.module.css';
import { withIdConnection } from './hoc/withIdConnect';

const headerLabels = {
  netflixRoulette: ["NETFLIX", "ROULETTE"],
  findYourMovie: "FIND YOUR MOVIE",
};

const footerLabels = {
  netflixRoulette: ["NETFLIX", "ROULETTE"],
}

const SortbarContainer = withConnect(Sortbar);
const MoviesContainer = withConnect(Movies);
const DescriptionContainer = withConnect(withIdConnection(Description));

const App = (props) => {
  return (
    <BrowserRouter>
      <Provider store={reduxPersistStore().reduxStore}>
      {/*  <PersistGate loading={null} persistor={reduxPersistStore().reduxPersistor}> */}
          <div className="app">
            <ErrorBoundary>
              <Switch>
                <Route path="/film/:id" render={({match}) => <DescriptionContainer headerLabels={headerLabels} match = {match}/>} />
                <Route path="/" render={({match}) => <Header headerLabels={headerLabels} match = {match}/>} />
              </Switch>
              <SortbarContainer />
              <MoviesContainer />
              <Footer footerLabels={footerLabels} />
              <ScrollUpButton />
            </ErrorBoundary>
          </div>
    {/*    </PersistGate>  */}
      </Provider>
    </BrowserRouter>
  )
}

export default App;
