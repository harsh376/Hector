import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Todo from './Todo';

describe('<Todo />', () => {
  it('renders a todo element', () => {
    const item = 'Ross';
    const wrapper = shallow(<Todo value={item} />);

    expect(wrapper.find('.todo')).to.have.length(1);
    expect(wrapper.text()).to.equal('Ross');
  });
});
