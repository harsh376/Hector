import React from 'react';
import { connect } from 'react-redux';

import CustomNavBar from '../MyNavBar/MyNavBar';
import updateLocale from '../../redux/modules/CustomNavBar/actionCreators';

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
  { pure: false },
)(CustomNavBarContainer);
