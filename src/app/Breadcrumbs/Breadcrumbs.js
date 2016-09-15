import React from 'react';
import { Link } from 'react-router';
import {
  defineMessages,
  FormattedMessage,
} from 'react-intl';

const componentMessages = defineMessages({
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
  );
}

Breadcrumbs.propTypes = {
  routes: React.PropTypes.arrayOf(React.PropTypes.object),
};

export default Breadcrumbs;
