import React from 'react';

import CustomNavBarContainer from '../CustomNavBar/CustomNavBarContainer';

function LayoutBootstrap({ content }) {
  return (
    <div>
      <CustomNavBarContainer />
      <div className="contentBoot">
        {content}
      </div>
    </div>
  );
}

LayoutBootstrap.propTypes = {
  content: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
};

export default LayoutBootstrap;
