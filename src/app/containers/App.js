import React from 'react';
import { Link } from 'react-router';

function App(props) {
  return (
  <div>
    <h1>App</h1>
    <ul>
      <li><a href='/auth/google'>Log in with Google</a></li>
      <li><a href='/logout'>Log out</a></li>
    </ul>
    {props.children}
  </div>
  );
}

App.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
};
App.defaultProps = {
  children: null,
};

export default App;
