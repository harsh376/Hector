// @flow
import React from 'react';
import { Link } from 'react-router';
import { defineMessages } from 'react-intl';

import ProjectOverview from '../ProjectOverview/ProjectOverview';

const items = [
  {
    name: 'capstone',
    componentMessages: defineMessages({
      title: {
        id: 'app.capstone.title',
        defaultMessage: 'Bullet Detection System',
      },
      description: {
        id: 'app.capstone.description',
        defaultMessage: 'During my final year at university, I worked on \
        prototyping a high speed projectile detection system along with three \
        other students. See details: {linkedText}',
      },
    }),
  },
  {
    name: 'searchEngine',
    componentMessages: defineMessages({
      title: {
        id: 'app.searchEngine.title',
        defaultMessage: 'Search Engine and Web Crawler',
      },
      description: {
        id: 'app.searchEngine.description',
        defaultMessage: "A friend of mine and I implemented a basic search \
        engine for a university course (CSC326). We wrote a web crawler \
        to index online documents and rank them using Google's page \
        rank algorithm. See details: {linkedText}",
      },
    }),
  },
];

function ProjectsList() {
  const nodes = items.map(item => {
    return (
      <ProjectOverview
        key={item.name}
        name={item.name}
        title={item.componentMessages.title}
        description={item.componentMessages.description}
      />
    );
  });
  return <div className="projects-list">{nodes}</div>;
}

export default ProjectsList;
