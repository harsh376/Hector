import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import SearchBar from './SearchBar';

describe('<SearchBar />', () => {
  it('renders input field, and returns input value on enter', () => {
    let value;
    const handleEnter = (v) => {
      value = v;
    };
    const newValue = 'Ross';
    const wrapper = shallow(
      <SearchBar handleEnter={handleEnter} />
    );

    wrapper.find('input').simulate('change', { target: { value: 'Ross' } });

    expect(value).to.equal(newValue);
  });
});
