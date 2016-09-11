import React from 'react';
import { Link } from 'react-router';

function Sidebar({ className }) {
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
    <div className={className}>
      <ul>
        {nodes}
      </ul>
    </div>
  );
}

Sidebar.propTypes = {
  className: React.PropTypes.string,
};

export default Sidebar;
