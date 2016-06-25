import React from 'react';
import { connect } from 'react-redux';

import { fetchAccountDetails } from '../actions/action_creators';
import Auth from '../components/Auth/Auth';

function App(props) {
  return (
    <div>
      <Auth
        user={props.user}
        fetchAccountDetails={props.fetchAccountDetails}
      >
          {props.children}
      </Auth>
    </div>
  );
}

App.propTypes = {
  user: React.PropTypes.object,
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
