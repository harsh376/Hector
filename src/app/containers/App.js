import React from 'react';
import { connect } from 'react-redux';
import { fetchAccountDetails } from '../actions/action_creators';
import Auth from '../components/Auth/Auth';

function App(props) {
  return (
    <div>
      <h1>App</h1>
      <Auth
        user={props.user}
        fetchAccountDetails={props.fetchAccountDetails}
      />
      {props.children}
    </div>
  );
}

App.propTypes = {
  user: React.PropTypes.number,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
  fetchAccountDetails: React.PropTypes.func.isRequired,
};
App.defaultProps = {
  children: null,
};

function mapStateToProps(state) {
  const { account } = state;
  return { user: account.get('user') };
}

export default connect(mapStateToProps, {
  fetchAccountDetails,
})(App);
