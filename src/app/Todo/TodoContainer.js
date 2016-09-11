import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import { connect } from 'react-redux';

import ItemList from './components/ItemList/ItemList';
import {
  fetchItems,
  deleteItem,
  addItem,
  updateItem,
} from './actions/action_creators';

export class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleEnter = this.handleEnter.bind(this);
  }
  componentDidMount() {
    this.props.fetchItems();
  }
  handleEnter(e) {
    if (e.key === 'Enter') {
      this.props.addItem(e.target.value);
      e.target.value = ''; // eslint-disable-line no-param-reassign
    }
  }
  render() {
    return (
      <div>
        <Button bsStyle="primary" onClick={this.props.fetchItems}>Refresh items</Button>
        <input
          ref="newItem"
          type="text"
          placeholder="Add new item"
          onKeyUp={this.handleEnter}
        />
        {!this.props.isFetching && (
          <ItemList
            list={this.props.data}
            deleteItem={this.props.deleteItem}
            updateItem={this.props.updateItem}
          />
        )}
      </div>
    );
  }
}

TodoContainer.propTypes = {
  isFetching: React.PropTypes.bool,
  data: React.PropTypes.array,
  fetchItems: React.PropTypes.func.isRequired,
  deleteItem: React.PropTypes.func.isRequired,
  addItem: React.PropTypes.func.isRequired,
  updateItem: React.PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { todo } = state;
  return {
    isFetching: todo.isFetching,
    data: todo.data,
  };
}

export default connect(mapStateToProps, {
  fetchItems,
  deleteItem,
  addItem,
  updateItem,
})(TodoContainer);
