import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Movie from './Movie'

configure({adapter: new Adapter()});

const movieTest = {
  id: 1,
  imageWay: './assets/poster.jpg',
  name: "Avengers",
  year: 2020,
  gengre: "Action film"
};

describe("<Movie> Snapshot", () => {
  const component = shallow(<Movie key = {movieTest.id} movie = {movieTest} />);
  it('+++capturing snapshot of Movie',()=>{
    expect(component).toMatchSnapshot();
  });
});