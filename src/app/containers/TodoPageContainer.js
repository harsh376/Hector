import React from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';

import TodoList from '../components/TodoList/TodoList';
import { fetchItems, fetchAccountDetails } from '../actions/action_creators';

export class TodoPageContainer extends React.Component {
  componentDidMount() {
    this.props.fetchItems();
  }
  render() {
    return (
      <div>
        <button onClick={this.props.fetchItems}>Refresh items</button>
        <button onClick={this.props.fetchAccountDetails}>Account</button>
        {!this.props.isFetching && (
          <TodoList list={this.props.data} />
        )}
      </div>
    );
  }
}

TodoPageContainer.propTypes = {
  isFetching: React.PropTypes.bool,
  data: React.PropTypes.instanceOf(List),
  fetchItems: React.PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { todo } = state;
  return {
    isFetching: todo.get('isFetching'),
    data: todo.get('data'),
  };
}

export default connect(mapStateToProps, {
  fetchItems,
  fetchAccountDetails,
})(TodoPageContainer);
