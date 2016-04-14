import { Map, fromJS } from 'immutable';
import { expect } from 'chai';

import reducer from './todo';

describe('reducers/todo', () => {
  it('handles FETCH_ITEMS_PENDING', () => {
    const initialState = new Map();
    const action = {
      type: 'FETCH_ITEMS_PENDING',
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal(fromJS({
      isFetching: true,
    }));
  });

  it('handles FETCH_ITEMS_FULFILLED', () => {
    const initialState = new Map({ isFetching: true });
    const action = {
      type: 'FETCH_ITEMS_FULFILLED',
      payload: ['one', 'two', 'three'],
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal(fromJS({
      isFetching: false,
      data: ['one', 'two', 'three'],
    }));
  });

  it('handles FETCH_ITEMS_REJECTED', () => {
    const initialState = new Map({ isFetching: true });
    const action = {
      type: 'FETCH_ITEMS_REJECTED',
      payload: 'something',
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal(fromJS({
      isFetching: false,
      error: 'something',
    }));
  });
});
