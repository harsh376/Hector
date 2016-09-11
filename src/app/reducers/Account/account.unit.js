import { expect } from 'chai';

import {
  FETCH_USER,
} from '../../constants/actionTypes';
import reducer from './account';

describe('reducers/account', () => {
  it(`handles ${FETCH_USER}_REQUEST`, () => {
    const initialState = {};
    const action = { type: `${FETCH_USER}_REQUEST` };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal({
      is_pending: true,
      user: null,
      error: null,
    });
  });

  it(`handles ${FETCH_USER}_SUCCESS`, () => {
    const initialState = {};
    const user = {
      first_name: 'Joe',
      last_name: 'Baker',
      email: 'joe@email.com',
      photo_url: 'https://example.com/one.jpeg',
    };
    const action = {
      type: `${FETCH_USER}_SUCCESS`,
      user,
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal({
      is_pending: false,
      user,
      error: null,
    });
  });

  it(`handles ${FETCH_USER}_FAILURE`, () => {
    const initialState = {};
    const action = {
      type: `${FETCH_USER}_FAILURE`,
      error: 'Some error',
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal({
      is_pending: false,
      user: null,
      error: 'Some error',
    });
  });
});
