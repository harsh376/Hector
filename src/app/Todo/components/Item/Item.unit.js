import React from 'react';
import { expect } from 'chai';
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
    expect(items).to.have.length(1);
    expect(items.find('input').props().value).to.equal('Ross');
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
    expect(delVal).to.equal('abc');
    items.find('button').simulate('click');
    expect(delVal).to.equal(someId);
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
    expect(updateVal).to.deep.equal({});
    items.find('input').simulate('change', { target: { value: 'Ross' } });
    expect(updateVal).to.deep.equal({
      id: someId,
      value: 'Ross',
    });
  });
});
