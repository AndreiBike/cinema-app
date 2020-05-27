import React from 'react';
import {configure ,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Movies from './Movies';

configure({adapter: new Adapter()});

describe("<Movies /> component testing" , ()=>{

  let component = null;
  jest.mock('@root/client/store/store');

  it("test #1 should call componentDidMount once", ()=> {
    let componentDidMountSpy = spyOn(Movies.prototype, 'componentDidMount');
    component = mount(<Movies />);
    expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
  });

  it("test #2 should populate the state", ()=> {
    component = mount(<Movies />);
    setTimeout(()=>{
      expect(component.state().movies.length).toBe(true);
    },0)
  });

  it("+++capturing snapshot of Movies ", ()=> {
    expect(component).toMatchSnapshot();
  });
});