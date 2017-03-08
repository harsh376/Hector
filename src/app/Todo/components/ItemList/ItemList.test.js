import React from 'react';
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
    function delFunc() {}
    function updateFunc() {}
    const wrapper = shallow(
      <ItemList
        list={list}
        deleteItem={delFunc}
        updateItem={updateFunc}
      />,
    );

    expect(wrapper.find('div').children().length).toEqual(3);
    expect(wrapper.contains([
      <Item id="1" value="Rachel" deleteItem={delFunc} updateItem={updateFunc} />,
      <Item id="2" value="Ross" deleteItem={delFunc} updateItem={updateFunc} />,
      <Item id="3" value="Chandler" deleteItem={delFunc} updateItem={updateFunc} />,
    ])).toEqual(true);
  });
});
