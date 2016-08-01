import { Map, fromJS } from 'immutable';
import { expect } from 'chai';

import { FETCH_ACCOUNT_DETAILS } from '../../constants/actionTypes';
import reducer from './account';

describe('reducers/account', () => {
  it(`handles ${FETCH_ACCOUNT_DETAILS}_PENDING`, () => {
    const initialState = new Map();
    const action = {
      type: `${FETCH_ACCOUNT_DETAILS}_PENDING`,
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal(fromJS({
      is_pending: true,
    }));
  });

  it(`handles ${FETCH_ACCOUNT_DETAILS}_FULFILLED`, () => {
    const initialState = new Map();
    const user = {
      first_name: 'Joe',
      last_name: 'Baker',
      email: 'joe@email.com',
      photo_url: 'https://example.com/one.jpeg',
    };
    const action = {
      type: `${FETCH_ACCOUNT_DETAILS}_FULFILLED`,
      payload: user,
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal(fromJS({
      is_pending: false,
      user,
    }));
  });

  it(`handles ${FETCH_ACCOUNT_DETAILS}_REJECTED`, () => {
    const initialState = new Map();
    const action = {
      type: `${FETCH_ACCOUNT_DETAILS}_REJECTED`,
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal(fromJS({
      is_pending: false,
      user: null,
    }));
  });
});
