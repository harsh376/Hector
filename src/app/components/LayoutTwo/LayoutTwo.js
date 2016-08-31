import React from 'react';

import SidebarContainer from './components/SidebarContainer';
import randomText from '../../constants/randomText';

function LayoutTwo({ content }) {
  return (
    <div>
      <SidebarContainer />
      <div className="contentTwo">
        {content || <div>{randomText.long}</div>}
      </div>
    </div>
  );
}

LayoutTwo.propTypes = {
  content: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
};

export default LayoutTwo;
