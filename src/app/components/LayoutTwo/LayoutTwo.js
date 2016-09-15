import React from 'react';
import { Link } from 'react-router';

import SidebarContainer from './components/SidebarContainer';
import randomText from '../../constants/randomText';

function LayoutTwo({ content, routes }) {
  const depth = routes.length;
  return (
    <div>
      <SidebarContainer />
      <div className="contentTwo">

        <ul className="breadcrumbs-list fixed">
          {routes.map((item, index) =>
            <li key={index}>
              <Link
                onlyActiveOnIndex
                activeClassName="breadcrumb-active"
                to={item.path || ''}
              >
                {item.component.title}
              </Link>
              {(index + 1) < depth && '/'}
            </li>
          )}
        </ul>

        <div className="routeBody">
          {content || randomText}
        </div>
      </div>
    </div>
  );
}

LayoutTwo.propTypes = {
  content: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
  routes: React.PropTypes.arrayOf(React.PropTypes.object),
};

export default LayoutTwo;
