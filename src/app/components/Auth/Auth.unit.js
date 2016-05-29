import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import Auth from './Auth';

describe('<Auth />', () => {
  let user;

  beforeEach(() => {
    user = {
      first_name: 'joe',
      last_name: 'baker',
      email: 'joe@email.com',
      photo_url: 'www.google.com/some.jpg',
    };
  });

  it('calls componentDidMount', () => {
    let x = 0;
    const stub = () => {x = 1000;};
    const componentDidMount = sinon.spy(Auth.prototype, 'componentDidMount');

    mount(<Auth user={user} fetchAccountDetails={stub} />);
    expect(componentDidMount.calledOnce).to.equal(true);
    expect(x).to.equal(1000);
  });

  it('renders `isLoggedIn` state', () => {
    const stub = () => user;
    const wrapper = shallow(
      <Auth user={user} fetchAccountDetails={stub} />
    );

    expect(wrapper.find('.loggedIn')).to.have.length(1);
    expect(wrapper.find('h3').text()).to.equal('Welcome, joe!');
    expect(wrapper.find('a').text()).to.equal('Log out');
  });

  it('renders `!isloggedIn` state', () => {
    user = null;
    const stub = () => user;
    const wrapper = shallow(
      <Auth user={user} fetchAccountDetails={stub} />
    );

    expect(wrapper.find('.loggedOut')).to.have.length(1);
    expect(wrapper.find('.loggedOut').children().equals(
      <a href="/auth/google">
        <img
          src="/static/google_signin.png"
          alt="Sign in with Google"
          height="40"
        />
      </a>
    )).to.equal(true);
  });
});
