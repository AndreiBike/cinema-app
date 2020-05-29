import React from 'react';
import { configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Description from './Description';

configure({ adapter: new Adapter() });

describe("<Description /> component testing", () => {

  let component = null;
  jest.mock('@root/client/store/store');

  it("test #1 should call componentDidMount once", () => {
    let componentDidMountSpy = spyOn(Description.prototype, 'componentDidMount');
    component = mount(<Description />);
    expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
  });

  it("test #2 should populate the state", () => {
    component = mount(<Description />);
    setTimeout(()=>{
      expect(component.state().movie.id).toBe(2);
    }, 0);
  });

  it("+++capturing snapshot of Description ", ()=>{
    expect(component).toMatchSnapshot();
  })
})
