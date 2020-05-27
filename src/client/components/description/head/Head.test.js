import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Head from './Head';

configure({ adapter: new Adapter() });

describe("<Head> component testing", () => {

  let component, headerTestLabels;

  beforeEach(() => {
    headerTestLabels = {
      netflixRoulette: ["NETFLIX", "ROULETTE"]
    };

    component = mount(<Head headerLabels={headerTestLabels} />);
  });

  it("test #1 component should exist", () => {
    expect(component).toBeTruthy();
    expect(component.props().headerLabels).toEqual(headerTestLabels);
  });

  it('test #2 component display label', () => {
    let label = component.find(".head-netflix-roulette");
    expect(label.text()).toEqual("NETFLIXROULETTE");
  }
  )
});