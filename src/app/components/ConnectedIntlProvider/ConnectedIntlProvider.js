import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

function mapStateToProps(state) {
  const { intl } = state;
  return {
    ...intl,
    key: intl.locale,
  };
}

export default connect(mapStateToProps)(IntlProvider);
