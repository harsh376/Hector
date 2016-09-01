import { expect } from 'chai';

import reducer from './reducers';
import { FETCH_ITEMS } from '../constants/actionTypes';

describe('Todo: reducers', () => {
  it(`handles ${FETCH_ITEMS}_REQUEST`, () => {
    const initialState = {};
    const action = {
      type: `${FETCH_ITEMS}_REQUEST`,
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal({
      isFetching: true,
      error: null,
    });
  });

  it(`handles ${FETCH_ITEMS}_SUCCESS`, () => {
    const initialState = {
      isFetching: true,
      error: null,
    };
    const action = {
      type: `${FETCH_ITEMS}_SUCCESS`,
      items: ['one', 'two', 'three'],
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal({
      isFetching: false,
      data: ['one', 'two', 'three'],
      error: null,
    });
  });

  it(`handles ${FETCH_ITEMS}_FAILURE`, () => {
    const initialState = {
      isFetching: true,
      error: null,
    };
    const action = {
      type: `${FETCH_ITEMS}_FAILURE`,
      error: 'some error',
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal({
      isFetching: false,
      error: 'some error',
    });
  });
});
