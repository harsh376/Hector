// @flow
import React from 'react';
import { Link } from 'react-router';
import { defineMessages } from 'react-intl';

import ProjectOverview from '../ProjectOverview/ProjectOverview';

export const projects = [
  {
    name: 'capstone',
    isExternalLink: false,
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
    isExternalLink: false,
    componentMessages: defineMessages({
      title: {
        id: 'app.searchEngine.title',
        defaultMessage: 'Search Engine and Web Crawler',
      },
      description: {
        id: 'app.searchEngine.description',
        defaultMessage: "A friend of mine and I implemented a basic search \
        engine for a university course project (CSC326). We wrote a web crawler \
        to index online documents and rank them using Google's page \
        rank algorithm. See details: {linkedText}",
      },
    }),
  },
  {
    name: 'restfulAPI',
    isExternalLink: true,
    externalLink: 'https://github.com/harsh376/Ajax/tree/master/ajax',
    componentMessages: defineMessages({
      title: {
        id: 'app.restfulAPI.title',
        defaultMessage: 'RESTful API',
      },
      description: {
        id: 'app.restfulAPI.description',
        defaultMessage: 'I am really interested about how to implement  \
        clean, modular APIs. Last summer I thought it would be an \
        interesting proposition to implement a RESTful API that one could use \
        in production environment. I went on to implement a basic API using \
        Python-Flask and Flask-RESTful and interfaced it over a MYSQL \
        database. Feel free to check it out: {linkedText}',
      },
    }),
  },
];

class ProjectsList extends React.Component {
  render() {
    const nodes = projects.map(item => {
      return (
        <ProjectOverview
          key={item.name}
          name={item.name}
          title={item.componentMessages.title}
          description={item.componentMessages.description}
          isExternalLink={item.isExternalLink}
          externalLink={item.externalLink || ''}
        />
      );
    });

    return <div className="projects-list">{nodes}</div>;
  }
}

export default ProjectsList;
