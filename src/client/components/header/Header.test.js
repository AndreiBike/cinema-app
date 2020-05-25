import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header'

configure({adapter: new Adapter()});

describe("<Header /> component testing", ()=> {
  let component, headerLabelsTest;
  headerLabelsTest = {
    netflixRoulette: ["NETFLIX", "ROULETTE"],
    findYourMovie: "FIND YOUR MOVIE",
  };
  component = shallow(<Header headerLabels = {headerLabelsTest} />);
  it("test #1 snapshot testing", ()=>{
    expect(component).toMatchSnapshot();
  })
})