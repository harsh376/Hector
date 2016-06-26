import React from 'react';

import LayoutTwo from '../LayoutTwo/LayoutTwo';

export default class Auth extends React.Component {
  componentDidMount() {
    this.props.fetchAccountDetails();
  }
  isLoggedIn(user) {
    return user || false;
  }
  render() {
    const isLoggedIn = this.isLoggedIn(this.props.user);

    return (
      <div>
        {isLoggedIn && (
          <LayoutTwo
            user={this.props.user}
            content={this.props.children}
          />
        )}
        {!isLoggedIn && (
          <div className="loggedOut">
            <a href="/auth/google">
              <img
                src="/static/google_signin.png"
                alt="Sign in with Google"
                height="40"
              />
            </a>
          </div>
        )}
      </div>
    );
  }
}

Auth.propTypes = {
  user: React.PropTypes.object,
  fetchAccountDetails: React.PropTypes.func.isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
};
