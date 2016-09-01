import React from 'react';

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
  list: React.PropTypes.array,
};
ItemList.defaultProps = {
  list: [],
};

export default ItemList;
