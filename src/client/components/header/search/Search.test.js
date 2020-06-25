import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from './Search';

configure({ adapter: new Adapter() });

describe("<Search> component testing", () => {
  const searchHandleClicked = jest.fn();
  const component = mount(<Search uploadMovies = {searchHandleClicked}/>);

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
  });

  it("test #4 Search button pressed", ()=>{
    const searchButton = component.find('.search-input-button');
    searchButton.simulate('click');
    expect(searchHandleClicked.mock.calls.length).toEqual(1);
  });
});