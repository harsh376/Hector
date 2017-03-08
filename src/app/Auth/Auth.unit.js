import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Auth from './Auth';
import LayoutBootstrap from '../LayoutBootstrap/LayoutBootstrap';

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

  it('auth enabled and user logged in', () => {
    const stub = () => user;
    const wrapper = shallow(
      <Auth
        enableAuth
        user={user}
        fetchAccountDetails={stub}
      >
        Hello
      </Auth>,
    );

    expect(wrapper.find(LayoutBootstrap).at(0).props().content).to.equal('Hello');
  });

  it('auth enabled and user not logged in', () => {
    user = null;
    const stub = () => user;
    const wrapper = shallow(
      <Auth
        enableAuth
        user={user}
        fetchAccountDetails={stub}
      />,
    );

    expect(wrapper.find('.loggedOut')).to.have.length(1);
    expect(wrapper.find('.loggedOut').children().equals(
      <a href="/auth/google">
        <img
          src="/static/google_signin.png"
          alt="Sign in with Google"
          height="40"
        />
      </a>,
    )).to.equal(true);
  });

  it('auth disabled', () => {
    user = null;
    const stub = () => user;
    const wrapper = shallow(
      <Auth
        enableAuth={false}
        user={user}
        fetchAccountDetails={stub}
      >
        Hello
      </Auth>,
    );

    expect(wrapper.find(LayoutBootstrap).at(0).props().content).to.equal('Hello');
  });
});
