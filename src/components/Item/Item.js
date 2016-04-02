import React from 'react';

/**
 * http://stackoverflow.com/questions/30347722/importing-css-files-in-isomorphic-react-components
 */
if (process.env.BROWSER) {
  require('../../../stylesheets/ItemClass.scss');
}

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
