import React from 'react';
import { configure } from 'enzyme';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import reduxPersistStore from '@root/client/reduxStore/reduxStore';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Header from './Header'

configure({ adapter: new Adapter() });

describe("<Header /> component testing", () => {
  let component, headerLabelsTest;
  headerLabelsTest = {
    netflixRoulette: ["NETFLIX", "ROULETTE"],
    findYourMovie: "FIND YOUR MOVIE",
  };

  it("test #1 snapshot testing", () => {
    component = renderer.create(
      <BrowserRouter>
        <Provider store={reduxPersistStore().reduxStore}>
          <PersistGate loading={null} persistor={reduxPersistStore().reduxPersistor}>
            <Header headerLabels={headerLabelsTest} />
          </PersistGate>
        </Provider>
      </BrowserRouter>).toJSON();
    expect(component).toMatchSnapshot();
  })
})