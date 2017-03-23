import React from 'react';

import LayoutBootstrap from '../containers/LayoutBootstrap/LayoutBootstrap';
import imageUrl from './static/google_signin.png';

export default class Auth extends React.Component {
  componentDidMount() {
    if (this.props.enableAuth) {
      this.props.fetchAccountDetails();
    }
  }
  render() {
    const isLoggedIn = (
      !this.props.enableAuth ||
      (this.props.enableAuth && this.props.user)
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
  enableAuth: React.PropTypes.bool.isRequired,
  user: React.PropTypes.object,   // eslint-disable-line react/forbid-prop-types
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
  routes: React.PropTypes.arrayOf(React.PropTypes.object),
  fetchAccountDetails: React.PropTypes.func.isRequired,
};


Auth.defaultProps = {
  user: {},
  children: null,
  routes: [],
};
