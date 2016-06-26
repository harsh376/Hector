import React from 'react';
import { Link } from 'react-router';

if (process.env.BROWSER) {
  require('../../../../stylesheets/layout.scss');
}

function Sidebar() {
  const items = [
    { path: '/', label: 'HOME' },
    { path: '/todo', label: 'TODO' },
    { path: '/filter', label: 'FILTER' },
  ];
  const nodes = items.map(item =>
    <li key={item.label}>
      <Link
        to={item.path}
        onlyActiveOnIndex
        activeClassName="breadcrumb-active"
      >
        {item.label}
      </Link>
    </li>
  );

  return (
    <div className="sidebarTwo">
      <div className="sidebarHeader"></div>

      <ul className="sidebarContent">
        {nodes}
      </ul>

      <div className="sidebarFooter"></div>
    </div>
  );
}

export default Sidebar;
