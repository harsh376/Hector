import React from 'react';
import { expect } from 'chai';
import { List } from 'immutable';
import { shallow } from 'enzyme';

import ResultsList from './ResultsList';
import Item from '../Item/Item';

describe('<ResultsList />', () => {
  it('renders a list of items', () => {
    const list = List.of('Ross', 'Rachel', 'Chandler');
    const wrapper = shallow(<ResultsList list={list} />);

    expect(wrapper.find('div').children()).to.have.length(3);
    expect(wrapper.contains([
      <Item value="Ross" />,
      <Item value="Rachel" />,
      <Item value="Chandler" />,
    ])).to.equal(true);
  });
});
