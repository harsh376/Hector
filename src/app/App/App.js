import React from 'react';
import 'bootstrap/less/bootstrap.less';
import { connect } from 'react-redux';

import Auth from '../Auth/Auth';
import { fetchAccountDetails } from '../Auth/actions/actionCreators';

// http://stackoverflow.com/questions/30347722/importing-css-files-in-isomorphic-react-components
if (process.env.BROWSER) {
  require('font-awesome/scss/font-awesome.scss');
  require('../stylesheets/layout.scss');
  require('../Breadcrumbs/stylesheets/Breadcrumbs.scss');
  require('../Todo/stylesheets/Item.scss');
  require('../Resume/stylesheets/Resume.scss');
  require('../Home/stylesheets/Home.scss');
}

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
  user: React.PropTypes.object,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
  routes: React.PropTypes.arrayOf(React.PropTypes.object),
  fetchAccountDetails: React.PropTypes.func,
};
App.defaultProps = {
  children: null,
};

function mapStateToProps(state) {
  const { auth } = state;
  return { user: auth.user };
}

export default connect(mapStateToProps, {
  fetchAccountDetails,
})(App);