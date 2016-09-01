import { expect } from 'chai';

import {
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILURE,
} from '../../constants/actionTypes';
import reducer from './account';

describe('reducers/account', () => {
  it(`handles ${USER_REQUEST}`, () => {
    const initialState = {};
    const action = { type: USER_REQUEST };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal({
      is_pending: true,
      user: null,
      error: null,
    });
  });

  it(`handles ${USER_SUCCESS}`, () => {
    const initialState = {};
    const user = {
      first_name: 'Joe',
      last_name: 'Baker',
      email: 'joe@email.com',
      photo_url: 'https://example.com/one.jpeg',
    };
    const action = {
      type: USER_SUCCESS,
      user,
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal({
      is_pending: false,
      user,
      error: null,
    });
  });

  it(`handles ${USER_FAILURE}`, () => {
    const initialState = {};
    const action = {
      type: USER_FAILURE,
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
