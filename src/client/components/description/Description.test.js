import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Description from './Description';
import {unmountComponentAtNode} from 'react-dom';

configure({ adapter: new Adapter() });

describe("<Description /> component testing", () => {

  let component = null;

  beforeEach(()=>{
    component = mount(<Description />);
    
  });

  it("test #1 should call componentDidMount once", () => {
    let componentDidMountSpy = spyOn(Description.prototype, 'componentDidMount');
    expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
  });

  it("test #2 should populate the state", async () => {
    const component = await mount(<Description />);
    await flushPromises();
    await expect(component.state().movie.id).toBe(2);
  });
})

function flushPromises() {
  return new Promise(resolve => setImmediate(()=>{
    resolve();
  }))
}
