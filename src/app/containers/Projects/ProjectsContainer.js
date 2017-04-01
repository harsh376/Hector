// @flow
import React from 'react';
import ProjectsList from '../../components/ProjectsList/ProjectsList';

class ProjectsContainer extends React.Component {
  static title: string = 'projects';
  render() {
    return <ProjectsList />;
  }
}

export default ProjectsContainer;
