import React from 'react';
import { Link } from 'react-router';

if (process.env.BROWSER) {
  require('../../stylesheets/layout.scss');
}

function Sidebar() {
  const items = [
    { path: '/', label: 'Home' },
    { path: '/todo', label: 'Todo' },
    { path: '/filter', label: 'Filter' },
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
    <div className="sidebar">
      <ul>
        {nodes}
      </ul>
    </div>
  );
}

export default Sidebar;
