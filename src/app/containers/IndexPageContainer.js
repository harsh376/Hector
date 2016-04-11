import React from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';

import Filter from '../components/Filter/Filter';
import { filterEntries } from '../actions/action_creators';

function IndexPageContainer(props) {
  return (
    <Filter {...props} />
  );
}

IndexPageContainer.propTypes = {
  input: React.PropTypes.string,
  entries: React.PropTypes.instanceOf(List),
  filterEntries: React.PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { filterState } = state;
  const entries = filterState.get('filtered_text') || new List();

  return { input: '', entries };
}

export default connect(mapStateToProps, {
  filterEntries,
})(IndexPageContainer);
