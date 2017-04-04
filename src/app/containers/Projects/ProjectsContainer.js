// @flow
import React from 'react';

class ProjectsContainer extends React.Component {
  static title: string = 'projects';
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default ProjectsContainer;
