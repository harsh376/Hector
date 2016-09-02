import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Item from './Item';

describe('Todo: <Item />', () => {
  it('renders a todo item', () => {
    let x = 'abc';
    const item = 'Ross';
    const someId = '78ACA9BF-196C-486B-8CA4-28AEC2E5C797';
    const someFunc = (value) => {
      x = value;
    };
    const wrapper = shallow(
      <Item
        key={someId}
        id={someId}
        value={item}
        deleteItem={someFunc}
      />
    );

    const items = wrapper.find('.item');
    expect(items).to.have.length(1);
    expect(items.find('.itemText').text()).to.equal('Ross');

    expect(x).to.equal('abc');
    items.find('button').simulate('click');
    expect(x).to.equal(someId);
  });
});
