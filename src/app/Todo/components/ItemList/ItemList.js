import React from 'react';
import { List } from 'immutable';

import Item from '../Item/Item';

function ItemList({ list }) {
  const itemNodes = list.map(item =>
    <Item value={item.name} key={item.id} />
  );
  return (
    <div>
      {itemNodes}
    </div>
  );
}

ItemList.propTypes = {
  list: React.PropTypes.instanceOf(List),
};
ItemList.defaultProps = {
  list: new List(),
};

export default ItemList;
