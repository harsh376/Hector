import React from 'react';

function Item({ id, value, deleteItem }) {
  return (
    <div id={id} className="item">
      <p className="itemText">{value}</p>
      <button className="btnDelete" onClick={() => deleteItem(id)}>Delete</button>
    </div>
  );
}

Item.propTypes = {
  id: React.PropTypes.string,
  value: React.PropTypes.string,
  deleteItem: React.PropTypes.func,
};

export default Item;
