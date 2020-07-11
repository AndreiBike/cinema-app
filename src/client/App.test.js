import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import App from "./App";

configure({adapter: new Adapter()});

describe("<App> component testing", () => {
  
  it ("+++capturing snapshot of App", ()=> {
    const component = renderer.create(<App />).toJSON();
    expect(component).toMatchSnapshot();
  })
})