import React from 'react';
import Footer from '@root/client/components/footer/Footer'
import Header from '@root/client/components/header/index';
import Sortbar from '@root/client/components/sortbar/Sortbar';
import Movies from '@root/client/components/movies/Movies';
import ErrorBoundary from '@root/client/components/errorBoundary/ErrorBoundary';
import Description from '@root/client/components/description/Description';
import './App.module.css';

const App = (props) => {
  return (
    <div className="app">
      <ErrorBoundary>
        <Header />
        <Description />
        <Sortbar />
        <Movies />
        <Footer />
      </ErrorBoundary>
    </div>
  )
}

export default App;
