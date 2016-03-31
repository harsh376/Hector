import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Item from './Item';

describe('<Item />', () => {
  it('renders an item', () => {
    const item = 'Ross';
    const wrapper = shallow(<Item value={item} key={item} />);

    expect(wrapper.find('.item')).to.have.length(1);
    expect(wrapper.text()).to.equal('Ross');
  });
});
