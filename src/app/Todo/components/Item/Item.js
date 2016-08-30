import React from 'react';

function Item({ value }) {
  return (
    <div className="item">
      <p>{value}</p>
    </div>
  );
}

Item.propTypes = {
  value: React.PropTypes.string,
};
Item.defaultProps = {
  value: '',
};

export default Item;
