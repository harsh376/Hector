import React from 'react';
import { List } from 'immutable';

import SearchBar from '../SearchBar/SearchBar';
import ResultsList from '../ResultsList/ResultsList';

function Filter({ filterEntries, entries }) {
  const styles = {
    border: '1px solid',
    width: 400,
  };
  return (
    <div style={styles}>
      <SearchBar handleEnter={filterEntries} />
      <ResultsList list={entries} />
    </div>
  );
}

Filter.propTypes = {
  entries: React.PropTypes.instanceOf(List),
  filterEntries: React.PropTypes.func.isRequired,
};
Filter.defaultProps = {
  entries: new List(),
};

export default Filter;
