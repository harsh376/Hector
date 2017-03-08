import React from 'react';

import Sidebar from '../Sidebar/Sidebar';

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
          {content}
        </div>
      </div>

      <div className="footer" />
    </div>
  );
}

LayoutOne.propTypes = {
  user: React.PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  content: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]).isRequired,
};

export default LayoutOne;
