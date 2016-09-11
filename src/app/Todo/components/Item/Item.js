import React from 'react';

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
  id: React.PropTypes.string,
  value: React.PropTypes.string,
  deleteItem: React.PropTypes.func,
  updateItem: React.PropTypes.func,
};

export default Item;
