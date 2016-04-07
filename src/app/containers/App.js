import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return this.props.children;
  }
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
