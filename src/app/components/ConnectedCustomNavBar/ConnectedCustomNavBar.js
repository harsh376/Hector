import React from 'react';
import { connect } from 'react-redux';

import MyNavBar from '../MyNavBar/MyNavBar';
import updateLocale from '../../redux/modules/CustomNavBar/actionCreators';

function CustomNavBar(props) {
  return <MyNavBar updateLocale={props.updateLocale} />;
}

CustomNavBar.propTypes = {
  updateLocale: React.PropTypes.func.isRequired,
};

export default connect(null, { updateLocale }, null, { pure: false })(
  CustomNavBar,
);
