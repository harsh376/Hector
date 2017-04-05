// @flow
import React from 'react';

class ProjectsContainer extends React.Component {
  static title: string = 'projects';
  render() {
    return (
      <div style={{ height: '100%', width: '100%' }}>{this.props.children}</div>
    );
  }
}

export default ProjectsContainer;
