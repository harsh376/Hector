import React from 'react';

import Sidebar from '../Sidebar/Sidebar';
import randomText from '../../constants/randomText';

if (process.env.BROWSER) {
  require('../../stylesheets/layout.scss');
}

function LayoutOne({ user, content }) {
  return (
    <div>
      <div className="header">
        <div className="profile">
          <span>{user.first_name}</span>
          <a href="/logout"><button>Log out</button></a>
        </div>
      </div>

      <div className="middle">
        <Sidebar className="sidebarOne" />

        <div className="contentOne">
          {content || <div>{randomText.long}</div>}
        </div>
      </div>

      <div className="footer"></div>
    </div>
  );
}

LayoutOne.propTypes = {
  user: React.PropTypes.object,
  content: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
};

export default LayoutOne;
