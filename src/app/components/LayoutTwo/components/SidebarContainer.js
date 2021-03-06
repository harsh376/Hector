import React from 'react';
import { connect } from 'react-redux';

import Sidebar from './Sidebar/Sidebar';
import { updateLocale } from '../../../redux/modules/CustomNavBar/actionCreators';

function SidebarContainer(props) {
  return (
    <Sidebar {...props} />
  );
}

SidebarContainer.propTypes = {
  updateLocale: React.PropTypes.func.isRequired,
};

export default connect(null,
  { updateLocale },
  null,
  { pure: false },
)(SidebarContainer);
