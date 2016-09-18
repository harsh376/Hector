import React from 'react';
import { Link } from 'react-router';
import {
  defineMessages,
  FormattedMessage,
} from 'react-intl';

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
});

// TODO: Add tests for component

function Breadcrumbs({ routes }) {
  const depth = routes.length;
  return (
    <div>
      {depth && (
        <ul className="breadcrumbs-list fixed">
          {routes.map((item, index) =>
            <li key={index}>
              <Link
                onlyActiveOnIndex
                activeClassName="breadcrumb-active"
                to={item.path || ''}
              >
                <FormattedMessage {...componentMessages[item.component.title]} />
              </Link>
              {(index + 1) < depth && '/'}
            </li>
          )}
        </ul>
      )}
      {!depth && (
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
        </ul>
      )}
    </div>
  );
}

Breadcrumbs.propTypes = {
  routes: React.PropTypes.arrayOf(React.PropTypes.object),
};

export default Breadcrumbs;
