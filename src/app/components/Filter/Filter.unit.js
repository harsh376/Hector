import React from 'react';
import { expect } from 'chai';
import { List } from 'immutable';
import { shallow } from 'enzyme';

import Filter from './Filter';
import SearchBar from '../SearchBar/SearchBar';
import ResultsList from '../ResultsList/ResultsList';

describe('<Filter />', () => {
  it('renders `ResultsList`', () => {
    const entries = List.of('Ross', 'Rachel', 'Chandler');
    const filterEntries = v => v;
    const styles = {
      border: '1px solid',
      width: 400,
    };
    const wrapper = shallow(
      <Filter input="" entries={entries} filterEntries={filterEntries} />,
    );

    expect(wrapper.prop('style')).to.deep.equal(styles);
    expect(wrapper.find(SearchBar)).to.have.length(1);
    expect(wrapper.find(ResultsList)).to.have.length(1);
  });
});
