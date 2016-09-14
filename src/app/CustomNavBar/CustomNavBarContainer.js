import React from 'react';
import { connect } from 'react-redux';

import CustomNavBar from './components/CustomNavBar';
import { updateLocale } from '../actions/action_creators';

function CustomNavBarContainer(props) {
  return (
    <CustomNavBar updateLocale={props.updateLocale} />
  );
}

CustomNavBarContainer.propTypes = {
  updateLocale: React.PropTypes.func.isRequired,
};

export default connect(null,
  { updateLocale },
  null,
  { pure: false }
)(CustomNavBarContainer);
