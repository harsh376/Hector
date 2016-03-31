import React from 'react';
import { List } from 'immutable';

import Item from '../Item/Item';

const ResultsList = (props) => (
  <div>
    {props.list.map(item =>
      <Item value={item} key={item} />
    )}
  </div>
);

ResultsList.propTypes = {
  list: React.PropTypes.instanceOf(List),
};
ResultsList.defaultProps = {
  list: new List(),
};

export default ResultsList;
