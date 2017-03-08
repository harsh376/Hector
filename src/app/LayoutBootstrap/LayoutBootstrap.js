import React from 'react';

import CustomNavBarContainer from '../CustomNavBar/CustomNavBarContainer';
import Home from '../Home/Home';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

// TODO: Add tests for `LayoutBootstrap` component

function LayoutBootstrap({ content, routes }) {
  return (
    <div>
      <CustomNavBarContainer />
      <Breadcrumbs routes={routes} />
      <div className="contentBoot topOffset">
        {content || <Home />}
      </div>
    </div>
  );
}

LayoutBootstrap.propTypes = {
  content: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
  routes: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

LayoutBootstrap.defaultProps = {
  content: null,
};

export default LayoutBootstrap;
