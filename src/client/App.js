import React from 'react';
import ScrollUpButton from "react-scroll-up-button";
import {compose} from 'redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {Switch, Route } from 'react-router-dom';
import reduxPersistStore from '@root/client/reduxStore/reduxStore';
import Footer from '@root/client/components/footer/Footer';
import Header from '@root/client/components/header/Header';
import Sortbar from '@root/client/components/sortbar/Sortbar';
import Movies from '@root/client/components/movies/Movies';
import ErrorBoundary from '@root/client/components/errorBoundary/ErrorBoundary';
import Description from '@root/client/components/description/Description';
import { withConnect } from '@root/client/hoc/withConnect';
import { withIdConnection } from './hoc/withIdConnect';
import NotFound from '@root/client/components/notFound/NotFound';
import './App.module.css';

console.log(__isBrowser__);

const headerLabels = {
  netflixRoulette: ["NETFLIX", "ROULETTE"],
  findYourMovie: "FIND YOUR MOVIE",
};

const footerLabels = {
  netflixRoulette: ["NETFLIX", "ROULETTE"],
}

const SortbarContainer = compose(withIdConnection, withConnect)(Sortbar);
const MoviesContainer = withConnect(Movies);
const DescriptionContainer = compose(withIdConnection, withConnect)(Description);
const BottomPart = () => {
  return (
    <React.Fragment>
      <SortbarContainer />
      <MoviesContainer />
      <Footer footerLabels={footerLabels} />
      <ScrollUpButton />
    </React.Fragment>
  )
}

const App = (props) => {
  return (
      <Provider store={reduxPersistStore().reduxStore}>
        <PersistGate loading={null} persistor={reduxPersistStore().reduxPersistor}>
          <div className="app">
            <ErrorBoundary>
              <Switch>
                <Route exact path="/" render={() => {
                  window.location.href = window.location.href + 'search/';
                }} />
                <Route exact path="/search/" render={() => {
                  return (
                    <React.Fragment>
                      <Header headerLabels={headerLabels} />
                      <BottomPart />
                    </React.Fragment>
                  )
                }} />
                <Route exact path="/film/:id" render={({ match }) => {
                  return (
                    <React.Fragment>
                      <DescriptionContainer headerLabels={headerLabels} match={match} />
                      <BottomPart />
                    </React.Fragment>
                  )
                }} />
                <Route exact path="/search/:searchText" render={({ match }) => {
                  return (
                    <React.Fragment>
                      <Header headerLabels={headerLabels} match={match} />
                      <BottomPart />
                    </React.Fragment>
                  )
                }} />
                <Route path="*" render = {()=>{
                  return(
                    <NotFound />
                  )
                }} />
              </Switch>
            </ErrorBoundary>
          </div>
        </PersistGate>
      </Provider>
  )
}

export default App;
