import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Sidebar from './Sidebar';

describe('<Sidebar />', () => {
  it('renders a list of items', () => {
    const wrapper = shallow(<Sidebar />);

    expect(wrapper.find('li')).to.have.length(3);
    const keys = wrapper.find('li').map(node => node.key());
    expect(keys).to.deep.equal(['Home', 'Todo', 'Filter']);
  });
});
