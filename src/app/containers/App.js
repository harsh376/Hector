import React from 'react';
import { connect } from 'react-redux';
import { fetchAccountDetails } from '../actions/action_creators';

export class App extends React.Component {
  componentDidMount() {
    this.props.fetchAccountDetails();
  }
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><a href="/auth/google">Log in with Google</a></li>
          <li><a href="/logout">Log out</a></li>
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
  fetchAccountDetails,
})(App);
