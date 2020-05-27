import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from './Search';

configure({ adapter: new Adapter() });

describe("<Search> component testing", () => {
  const component = mount(<Search />);

  it("test #1 component should exist", () => {
    expect(component).toBeTruthy();
  });

  it("test #2 gengre button pressed", () => {
    const gengreButton = component.find('.gengre-button');
    gengreButton.simulate('click');
    expect(component.state().searchByTitle.status).toEqual(false);
    expect(component.state().searchByGengre.status).toEqual(true);
  });

  it("test #3 title button pressed", () => {
    const titleButton = component.find('.title-button');
    titleButton.simulate('click');
    expect(component.state().searchByTitle.status).toEqual(true);
    expect(component.state().searchByGengre.status).toEqual(false);
  })
});