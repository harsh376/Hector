import React from 'react';
import 'bootstrap/less/bootstrap.less';
import 'font-awesome/scss/font-awesome.scss';

import LayoutBootstrap from '../LayoutBootstrap/LayoutBootstrap';

function App(props) {
  return (
    <LayoutBootstrap
      content={props.children}
      routes={props.routes}
    />
  );
}

App.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
  routes: React.PropTypes.arrayOf(React.PropTypes.object),
};
App.defaultProps = {
  children: null,
  routes: [],
};

export default App;
