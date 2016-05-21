import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import Auth from './Auth';

describe('<Auth />', () => {
  it('calls componentDidMount', () => {
    let x = 0;
    const user = 123;
    const stub = () => {x = 1000;};
    const componentDidMount = sinon.spy(Auth.prototype, 'componentDidMount');

    mount(<Auth user={user} fetchAccountDetails={stub} />);
    expect(componentDidMount.calledOnce).to.equal(true);
    expect(x).to.equal(1000);
  });

  it('renders `isLoggedIn` state', () => {
    const user = 123;
    const stub = () => user;
    const wrapper = shallow(
      <Auth user={user} fetchAccountDetails={stub} />
    );

    expect(wrapper.find('.loggedIn')).to.have.length(1);
    expect(wrapper.find('h3').text()).to.equal('Welcome, 123!');
    expect(wrapper.find('a').text()).to.equal('Log out');
  });

  it('renders `!loggedIn` state', () => {
    const user = null;
    const stub = () => user;
    const wrapper = shallow(
      <Auth user={user} fetchAccountDetails={stub} />
    );

    expect(wrapper.find('.loggedOut')).to.have.length(1);
    expect(wrapper.find('a').text()).to.equal('Log in with Google');
  });
});
