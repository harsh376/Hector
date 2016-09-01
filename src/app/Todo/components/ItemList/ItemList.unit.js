import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ItemList from './ItemList';
import Item from '../Item/Item';

describe('Todo: <ItemList />', () => {
  it('renders a list of items', () => {
    const list = [
      { name: 'Ross', id: 'Ross' },
      { name: 'Rachel', id: 'Rachel' },
      { name: 'Chandler', id: 'Chandler' },
    ];
    const wrapper = shallow(<ItemList list={list} />);

    expect(wrapper.find('div').children()).to.have.length(3);
    expect(wrapper.contains([
      <Item value="Ross" />,
      <Item value="Rachel" />,
      <Item value="Chandler" />,
    ])).to.equal(true);
  });
});
