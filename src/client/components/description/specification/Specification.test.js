import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Specification from './Specification';
import {data} from '@root/client/store/store'

configure({adapter: new Adapter()});

describe("<Specification /> component testing", ()=>{
  let component, movieTest;

  beforeEach(()=>{
    
    movieTest = data.movies[0];
    component = mount(<Specification movie = {movieTest} />);
  })

  it("test #1 component should exist", ()=>{
    expect(component).toBeTruthy();
    expect(component.props().movie).toEqual(movieTest);
  })

  it("test #2 component display correct information", ()=>{
    let name = component.find(".specification-name-rating span:first-child");
    let image = component.find(".specification-image img");
    let rating = component.find(".specification-name-rating span:last-child");
    let gengre = component.find(".specification-short-description");
    let year = component.find(".specification-year-duration .year");
    let duration = component.find(".specification-year-duration .duration");
    let description = component.find(".specification-text");

    expect(name.text()).toEqual(movieTest.name);
    expect(image.prop("src")).toEqual(movieTest.imageWay);
    expect(rating.text()).toEqual(String(movieTest.rating));
    expect(gengre.text()).toEqual(movieTest.gengre);
    expect(year.text()).toEqual(String(movieTest.year));
    expect(duration.text()).toEqual(String(movieTest.duration));
    expect(description.text()).toEqual(movieTest.description);
  });
});