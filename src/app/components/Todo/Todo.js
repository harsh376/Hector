import React from 'react';

function Todo({ value }) {
  return (
    <div className="todo">
      <p>{value}</p>
    </div>
  );
}

Todo.propTypes = {
  value: React.PropTypes.string,
};
Todo.defaultProps = {
  value: '',
};

export default Todo;
