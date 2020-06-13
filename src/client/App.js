import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate} from 'redux-persist/integration/react';
import reduxPersistStore from '@root/client/reduxStore/reduxStore';
import Footer from '@root/client/components/footer/Footer';
import Header from '@root/client/components/header/Header';
import Sortbar from '@root/client/components/sortbar/Sortbar';
import Movies from '@root/client/components/movies/Movies';
import ErrorBoundary from '@root/client/components/errorBoundary/ErrorBoundary';
import Description from '@root/client/components/description/Description';
import './App.module.css';

const headerLabels = {
  netflixRoulette: ["NETFLIX", "ROULETTE"],
  findYourMovie: "FIND YOUR MOVIE",
};

const footerLabels = {
  netflixRoulette: ["NETFLIX", "ROULETTE"],
}


const App = (props) => {
  return (
    <Provider store={reduxPersistStore().reduxStore}>
      <PersistGate loading={null} persistor = {reduxPersistStore().reduxPersistor}>
      <div className="app">
        <ErrorBoundary>
          <Header headerLabels={headerLabels} />
          {/* <Description headerLabels={headerLabels} /> */}
          <Sortbar />
          <Movies />
          <Footer footerLabels={footerLabels} />
        </ErrorBoundary>
      </div>
      </PersistGate>
    </Provider>
  )
}

export default App;
