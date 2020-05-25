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

  
})