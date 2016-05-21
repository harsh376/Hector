import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchItems, fetchAccountDetails } from '../actions/action_creators';

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <button onClick={this.props.fetchAccountDetails}>Account</button>
        <ul>
          <li><a href='/auth/google'>Log in with Google</a></li>
          <li><a href='/logout'>Log out</a></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  fetchAccountDetails: React.PropTypes.func.isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
};
App.defaultProps = {
  children: null,
};

export default connect(null, {
  fetchItems,
  fetchAccountDetails,
})(App);
