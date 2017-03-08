import React from 'react';
import 'bootstrap/less/bootstrap.less';
import { connect } from 'react-redux';
import 'font-awesome/scss/font-awesome.scss';
import '../stylesheets/layout.scss';

import Auth from '../Auth/Auth';
import fetchAccountDetails from '../Auth/actions/actionCreators';

const enableAuth = process.env.USER_AUTH === 'enabled';

function App(props) {
  return (
    <div>
      <Auth
        enableAuth={enableAuth}
        user={props.user}
        fetchAccountDetails={props.fetchAccountDetails}
        routes={props.routes}
      >
        {props.children}
      </Auth>
    </div>
  );
}

App.propTypes = {
  user: React.PropTypes.object,   // eslint-disable-line react/forbid-prop-types
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
  routes: React.PropTypes.arrayOf(React.PropTypes.object),
  fetchAccountDetails: React.PropTypes.func.isRequired,
};
App.defaultProps = {
  user: {},
  children: null,
  routes: [],
};

function mapStateToProps(state) {
  const { auth } = state;
  return { user: auth.user };
}

export default connect(mapStateToProps, {
  fetchAccountDetails,
})(App);
