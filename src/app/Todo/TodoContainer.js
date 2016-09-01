import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import { connect } from 'react-redux';

import ItemList from './components/ItemList/ItemList';
import { fetchItems } from './actions/action_creators';

export class TodoContainer extends React.Component {
  componentDidMount() {
    this.props.fetchItems();
  }
  render() {
    return (
      <div>
        <Button bsStyle="primary" onClick={this.props.fetchItems}>Refresh items</Button>
        {!this.props.isFetching && (
          <ItemList list={this.props.data} />
        )}
      </div>
    );
  }
}

TodoContainer.propTypes = {
  isFetching: React.PropTypes.bool,
  data: React.PropTypes.array,
  fetchItems: React.PropTypes.func.isRequired,
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
})(TodoContainer);
