import React from 'react';

import randomText from '../../constants/randomText';
import Sidebar from '../Sidebar/Sidebar';

if (process.env.BROWSER) {
  require('../../stylesheets/layout.scss');
}

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
          <div>
            <div className="header">
              <div className="profile">
                <span>{this.props.user.first_name}</span>
                <a href="/logout"><button>Log out</button></a>
              </div>
            </div>

            <div className="middle">
              <Sidebar />

              <div className="content">
                {this.props.children || <div>{randomText.long}</div>}
              </div>
            </div>

            <div className="footer"></div>
          </div>
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
