import React from 'react';
import { Link } from 'react-router';
import { defineMessages, FormattedMessage } from 'react-intl';

import './stylesheets/Breadcrumbs.scss';

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
});

// TODO: Add tests for component

function Breadcrumbs({ routes }) {
  const newRoutes = [];
  routes.forEach(item => {
    if (item.path !== '/') {
      newRoutes.push(item);
    }
  });
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
                to={item.path !== '*' ? item.path : '/'}
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

Breadcrumbs.propTypes = {
  routes: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default Breadcrumbs;
