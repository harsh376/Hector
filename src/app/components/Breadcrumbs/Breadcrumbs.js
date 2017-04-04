import React from 'react';
import { Link } from 'react-router';
import { defineMessages, FormattedMessage } from 'react-intl';

import './stylesheets/Breadcrumbs.scss';
import { projects } from '../ProjectsList/ProjectsList';

const componentMessages = defineMessages({
  aboutMe: {
    id: 'app.aboutme',
    defaultMessage: 'About me',
  },
  resume: {
    id: 'app.resume',
    defaultMessage: 'Resume',
  },
  projects: {
    id: 'app.projects',
    defaultMessage: 'Projects',
  },
  backToHome: {
    id: 'app.backToHome',
    defaultMessage: 'Go Back to Home',
  },
  // TODO: Make using translations DRY
  capstone: {
    id: 'app.breadcrumbs.capstone',
    defaultMessage: 'Bullet Detection System',
  },
});

// TODO: Add tests for component

class Breadcrumbs extends React.Component {
  getNewRoutes(routes) {
    const newRoutes = [];
    let runningPath = '';
    this.props.routes.forEach(item => {
      if (item.path && item.path !== '/') {
        runningPath = `${runningPath}/${item.path}`;
        item['absolutePath'] = runningPath;
        newRoutes.push(item);
      }
    });
    return newRoutes;
  }

  render() {
    const newRoutes = this.getNewRoutes(this.props.routes);
    const depth = newRoutes.length;
    return (
      <div>
        {/* All routes except home */}
        {depth &&
          <ul className="breadcrumbs-list fixed">
            {newRoutes.map((item, index) => (
              <li key={item.path}>
                <Link
                  onlyActiveOnIndex
                  activeClassName="breadcrumb-active"
                  to={item.absolutePath !== '/*' ? item.absolutePath : '/'}
                >
                  <FormattedMessage
                    {...componentMessages[item.component.title]}
                  />
                </Link>
                {index + 1 < depth && '/'}
              </li>
            ))}
          </ul>}

        {/* Home route */}
        {!depth &&
          <ul className="breadcrumbs-list fixed">
            <li key="aboutMe">
              <Link
                onlyActiveOnIndex
                activeClassName="breadcrumb-active"
                to={'/'}
              >
                <FormattedMessage {...componentMessages.aboutMe} />
              </Link>
            </li>
          </ul>}
      </div>
    );
  }
}

Breadcrumbs.propTypes = {
  routes: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default Breadcrumbs;
