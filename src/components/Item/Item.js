import React from 'react';

const styles = {
  background: '#e5f0ff',
  borderBottom: '2px solid white',
  padding: '10 0 0 10',
};

const Item = (props) => (
  <div style={styles} className="item">
    <p><i>{props.value}</i></p>
  </div>
);

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
