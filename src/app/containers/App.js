import React from 'react';
import 'bootstrap/less/bootstrap.less';
import { connect } from 'react-redux';

import Auth from '../components/Auth/Auth';

// http://stackoverflow.com/questions/30347722/importing-css-files-in-isomorphic-react-components
if (process.env.BROWSER) {
  require('../stylesheets/layout.scss');
  require('../Todo/stylesheets/Item.scss');
}

const enableAuth = process.env.USER_AUTH === 'enabled';

function App(props) {
  return (
    <div>
      <Auth
        enableAuth={enableAuth}
        user={props.user}
        dispatch={props.dispatch}
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
  dispatch: React.PropTypes.func,
};
App.defaultProps = {
  children: null,
};

function mapStateToProps(state) {
  const { account } = state;
  return { user: account.user };
}

export default connect(mapStateToProps)(App);
