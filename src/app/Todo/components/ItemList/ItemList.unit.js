import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ItemList from './ItemList';
import Item from '../Item/Item';

describe('Todo: <ItemList />', () => {
  it('renders a list of items', () => {
    const list = [
      { name: 'Ross', id: '2', order: 2 },
      { name: 'Rachel', id: '1', order: 1 },
      { name: 'Chandler', id: '3', order: 3 },
    ];
    function someFunc() { return; }
    const wrapper = shallow(
      <ItemList list={list} deleteItem={someFunc} />
    );

    expect(wrapper.find('div').children()).to.have.length(3);
    expect(wrapper.contains([
      <Item id="1" value="Rachel" deleteItem={someFunc} />,
      <Item id="2" value="Ross" deleteItem={someFunc} />,
      <Item id="3" value="Chandler" deleteItem={someFunc} />,
    ])).to.equal(true);
  });
});
