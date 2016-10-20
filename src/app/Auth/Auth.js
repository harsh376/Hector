import React from 'react';

import LayoutBootstrap from '../LayoutBootstrap/LayoutBootstrap';

// for unit test, need this default value
let imageUrl = '/static/google_signin.png';

// TODO: Add loader to webpack config files
if (process.env.BROWSER) {
  imageUrl = require('file!./static/google_signin.png');
}

export default class Auth extends React.Component {
  componentDidMount() {
    if (this.props.enableAuth) {
      this.props.fetchAccountDetails();
    }
  }
  isLoggedIn(user) {
    return user || false;
  }
  render() {
    const isLoggedIn = (
      !this.props.enableAuth ||
      (this.props.enableAuth && this.isLoggedIn(this.props.user))
    );

    return (
      <div>
        {isLoggedIn && (
          <LayoutBootstrap
            content={this.props.children}
            routes={this.props.routes}
          />
        )}
        {!isLoggedIn && (
          <div className="loggedOut">
            <a href="/auth/google">
              <img
                src={imageUrl}
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
  enableAuth: React.PropTypes.bool,
  user: React.PropTypes.object,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
  routes: React.PropTypes.arrayOf(React.PropTypes.object),
  fetchAccountDetails: React.PropTypes.func,
};
