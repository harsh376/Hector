import React from 'react';

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
          <div className="loggedIn">
            <h3>Welcome, {this.props.user}!</h3>
            <a href="/logout">Log out</a>
          </div>
        )}
        {!isLoggedIn && (
          <div className="loggedOut">
            <a href="/auth/google">Log in with Google</a>
          </div>
        )}
      </div>
    );
  }
}

Auth.propTypes = {
  user: React.PropTypes.number,
  fetchAccountDetails: React.PropTypes.func.isRequired,
};
