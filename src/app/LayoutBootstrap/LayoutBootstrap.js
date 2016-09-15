import React from 'react';

import CustomNavBarContainer from '../CustomNavBar/CustomNavBarContainer';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import randomText from '../constants/randomText';

// TODO: Add tests for `LayoutBootstrap` component

function LayoutBootstrap({ content, routes }) {
  routes.splice(0, 1);
  const showBreadcrumbs = routes.length;
  const offsetClass = showBreadcrumbs ? 'topOffset' : '';
  const contentClassName = `contentBoot ${offsetClass}`;

  return (
    <div>
      <CustomNavBarContainer />

      {showBreadcrumbs && (<Breadcrumbs routes={routes} />)}

      <div className={contentClassName}>
        {content || randomText.long}
      </div>
    </div>
  );
}

LayoutBootstrap.propTypes = {
  content: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
  routes: React.PropTypes.arrayOf(React.PropTypes.object),
};

export default LayoutBootstrap;
