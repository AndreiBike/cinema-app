import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sortbar from './Sortbar';

configure({adapter: new Adapter()});

describe("<Sortbar> component testing", () => {
  
  let component = mount(<Sortbar />);

  it("test #1 component exist", ()=> {
    expect(component).toBeTruthy();
  });

  it("test #2 rating button pressed", ()=> {
    const ratingButton = component.find('.rating-button');
    ratingButton.simulate('click');
    setTimeout(()=>{
      expect(ratingButton.prop('className')).toEqual("rating-button active");
    }, 0);
  });

  it("test #3 release date button pressed", ()=> {
    const releaseButton = component.find('.release-button');
    releaseButton.simulate('click');
    setTimeout(()=>{
      expect(releaseButton.prop('className')).toEqual("release-button active");
    });
  });
});