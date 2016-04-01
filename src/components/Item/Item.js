import '../../../stylesheets/ItemClass.scss';
import React from 'react';

function Item({ value }) {
  return (
    <div className="item">
      <p><i>{value}</i></p>
    </div>
  );
}

Item.propTypes = {
  item: React.PropTypes.string,
  key: React.PropTypes.string,
  value: React.PropTypes.string,
};
Item.defaultProps = {
  item: '',
  key: '',
  value: '',
};

export default Item;
