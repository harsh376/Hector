import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Auth from './Auth';
import LayoutTwo from '../LayoutTwo/LayoutTwo';

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

  it('renders `isLoggedIn` state', () => {
    const stub = () => user;
    const wrapper = shallow(
      <Auth user={user} fetchAccountDetails={stub} />
    );

    expect(wrapper.find(LayoutTwo).at(0).props().user).to.equal(user);
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
