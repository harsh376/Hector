import React from 'react';
import { expect } from 'chai';
import { List } from 'immutable';
import { shallow } from 'enzyme';

import TodoList from './TodoList';
import Todo from '../Todo/Todo';

describe('<TodoList />', () => {
  it('renders a list of items', () => {
    const list = new List([
      { name: 'Ross' },
      { name: 'Rachel' },
      { name: 'Chandler' },
    ]);
    const wrapper = shallow(<TodoList list={list} />);

    expect(wrapper.find('div').children()).to.have.length(3);
    expect(wrapper.contains([
      <Todo value="Ross" />,
      <Todo value="Rachel" />,
      <Todo value="Chandler" />,
    ])).to.equal(true);
  });
});
