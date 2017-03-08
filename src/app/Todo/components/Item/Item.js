import React from 'react';

import '../../stylesheets/Item.scss';

function Item({ id, value, deleteItem, updateItem }) {
  return (
    <div className="item">
      <input
        type="text"
        value={value}
        onChange={e => updateItem(id, e.target.value)}
      />
      <button className="btnDelete" onClick={() => deleteItem(id)}>Delete</button>
    </div>
  );
}

Item.propTypes = {
  id: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  deleteItem: React.PropTypes.func.isRequired,
  updateItem: React.PropTypes.func.isRequired,
};

export default Item;
