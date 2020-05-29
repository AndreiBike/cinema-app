import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from "./App";

configure({adapter: new Adapter()});

describe("<App> component testing", () => {
  const component = mount(<App />);

  it ("+++capturing snapshot of App", ()=> {
    expect(component).toMatchSnapshot();
  })
})