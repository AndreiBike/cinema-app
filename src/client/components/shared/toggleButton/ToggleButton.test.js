import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ToggleButton from './ToggleButton';

configure({ adapter: new Adapter() });

describe("<Toggle Button> component testing", () => {
  const toggleOnClickTest = jest.fn();
  const toggleClassNameTest = "test-classname";
  const toggleTextTest = "test-textname";
  let component = mount(<ToggleButton toggleOnClick={toggleOnClickTest}
    toggleClassName={toggleClassNameTest}
    toggleText={toggleTextTest}
  />);

  it("test #1 component should exist and props are incoming", () => {
    expect(component).toBeTruthy();
    expect(component.props().toggleOnClick).toEqual(toggleOnClickTest);
    expect(component.props().toggleClassName).toEqual(toggleClassNameTest);
    expect(component.props().toggleText).toEqual(toggleTextTest);
  });

  it("test #2 button pressed and work correctly", () => {
    const button = component.find("button");
    button.simulate('click');
    expect(toggleOnClickTest.mock.calls.length).toEqual(1);
  });
});