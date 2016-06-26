import React from 'react';

import Sidebar from './components/Sidebar/Sidebar';
import randomText from '../../constants/randomText';

if (process.env.BROWSER) {
  require('../../stylesheets/layout.scss');
}

function LayoutTwo({ content }) {
  return (
    <div>
      <Sidebar />
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
