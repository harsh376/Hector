import React from 'react';
import { List } from 'immutable';

import Todo from '../Todo/Todo';

function TodoList({ list }) {
  const itemNodes = list.map(item =>
    <Todo value={item.name} key={item.id} />
  );
  return (
    <div>
      {itemNodes}
    </div>
  );
}

TodoList.propTypes = {
  list: React.PropTypes.instanceOf(List),
};
TodoList.defaultProps = {
  list: new List(),
};

export default TodoList;
