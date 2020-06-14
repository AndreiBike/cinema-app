import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Movies from './Movies';

configure({ adapter: new Adapter() });

describe("<Movies /> component testing", () => {
  const uploadMovies =jest.fn()
  let component = mount(<Movies movies={[]}
    isLoading={false}
    sortBy={'release_date'}
    searchText={''}
    searchBy={'title'}
    offset={0}
    total={0}
    uploadMovies = {uploadMovies}
  />)

  it("+++capturing snapshot of Movies ", () => {
    expect(component).toMatchSnapshot();
  });
});