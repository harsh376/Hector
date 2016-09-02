import React from 'react';

import Item from '../Item/Item';

function sortList(list) {
  list.sort((a, b) => {
    if (a.order > b.order) {
      return 1;
    }
    if (a.order < b.order) {
      return -1;
    }
    return 0;
  });
}

function ItemList({ list, deleteItem }) {
  sortList(list);
  const itemNodes = list.map(item =>
    <Item
      key={item.id}
      id={item.id}
      value={item.name}
      deleteItem={deleteItem}
    />
  );
  return (
    <div>
      {itemNodes}
    </div>
  );
}

ItemList.propTypes = {
  list: React.PropTypes.array,
  deleteItem: React.PropTypes.func,
};
ItemList.defaultProps = {
  list: [],
};

export default ItemList;
