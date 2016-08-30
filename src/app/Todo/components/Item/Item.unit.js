import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Item from './Item';

describe('Todo: <Item />', () => {
  it('renders a todo item', () => {
    const item = 'Ross';
    const wrapper = shallow(<Item value={item} />);

    expect(wrapper.find('.item')).to.have.length(1);
    expect(wrapper.text()).to.equal('Ross');
  });
});
