import React from 'react';
import { List } from 'immutable';

import SearchBar from '../SearchBar/SearchBar';
import ResultsList from '../ResultsList/ResultsList';

const styles = {
  border: '1px solid',
  width: 400,
};

const Filter = (props) => (
  <div style={styles}>
    <SearchBar handleEnter={props.filterEntries} />
    <ResultsList list={props.entries} />
  </div>
);

Filter.propTypes = {
  entries: React.PropTypes.instanceOf(List),
  filterEntries: React.PropTypes.func.isRequired,
};
Filter.defaultProps = {
  entries: new List(),
};

export default Filter;
