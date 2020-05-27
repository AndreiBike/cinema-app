import React from 'react';
import {configure, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './Footer';

configure({adapter: new Adapter()});

const footerLabelsTest = {
  netflixRoulette: ["NETFLIX", "ROULETTE"],
};

describe("<Footer> Snapshot", () => {
  const component = render(<Footer footerLabels = {footerLabelsTest} />);
  
  it('+++capturing snapshot of Footer', () => {
    expect(component).toMatchSnapshot();
  })
});


