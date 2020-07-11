import React from 'react';
import {configure, render} from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './Footer';

configure({adapter: new Adapter()});

const footerLabelsTest = {
  netflixRoulette: ["NETFLIX", "ROULETTE"],
};

const component = renderer.create(<Footer footerLabels = {footerLabelsTest} />).toJSON();

describe("<Footer> Snapshot", () => {
  it('+++capturing snapshot of Footer', () => {
    expect(component).toMatchSnapshot();
  })
});


