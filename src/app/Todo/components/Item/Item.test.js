import React from 'react';
import { shallow } from 'enzyme';

import Item from './Item';

describe('Todo: <Item />', () => {
  it('renders a todo item', () => {
    const item = 'Ross';
    const someId = '78ACA9BF-196C-486B-8CA4-28AEC2E5C797';
    const deleteItem = () => {};
    const updateItem = () => {};
    const wrapper = shallow(
      <Item
        key={someId}
        id={someId}
        value={item}
        deleteItem={deleteItem}
        updateItem={updateItem}
      />
    );

    const items = wrapper.find('.item');
    expect(items.length).toEqual(1);
    expect(items.find('input').props().value).toEqual('Ross');
  });

  it('calls deleteItem correctly', () => {
    let delVal = 'abc';
    const item = 'Ross';
    const someId = '78ACA9BF-196C-486B-8CA4-28AEC2E5C797';
    const deleteItem = (value) => {
      delVal = value;
    };
    const updateItem = () => {};
    const wrapper = shallow(
      <Item
        key={someId}
        id={someId}
        value={item}
        deleteItem={deleteItem}
        updateItem={updateItem}
      />
    );

    const items = wrapper.find('.item');
    expect(delVal).toEqual('abc');
    items.find('button').simulate('click');
    expect(delVal).toEqual(someId);
  });

  it('calls updateItem correctly', () => {
    const updateVal = {};
    const item = 'Ross';
    const someId = '78ACA9BF-196C-486B-8CA4-28AEC2E5C797';
    const deleteItem = () => {};
    const updateItem = (id, value) => {
      Object.assign(updateVal, { id, value });
    };
    const wrapper = shallow(
      <Item
        key={someId}
        id={someId}
        value={item}
        deleteItem={deleteItem}
        updateItem={updateItem}
      />
    );

    const items = wrapper.find('.item');
    expect(updateVal).toEqual({});
    items.find('input').simulate('change', { target: { value: 'Ross' } });
    expect(updateVal).toEqual({
      id: someId,
      value: 'Ross',
    });
  });
});
