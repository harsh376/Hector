import React from 'react';
import { List } from 'immutable';

import Item from '../Item/Item';

function ResultsList({ list }) {
  const itemNodes = list.map(item =>
    <Item value={item} key={item} />,
  );
  return (
    <div>
      {itemNodes}
    </div>
  );
}

ResultsList.propTypes = {
  list: React.PropTypes.instanceOf(List),
};
ResultsList.defaultProps = {
  list: new List(),
};

export default ResultsList;
