import { List, Map, fromJS } from 'immutable';
import { expect } from 'chai';

import reducer from './filter';

describe('reducers/filter', () => {
  it('handles SET_STATE', () => {
    const initialState = new Map();
    const action = {
      type: 'SET_STATE',
      state: new Map({
        input: 'R',
        filtered_text: List.of('Ross', 'Rachel'),
        entries: List.of('Ross', 'Rachel', 'Chandler'),
      }),
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal(fromJS({
      input: 'R',
      filtered_text: ['Ross', 'Rachel'],
      entries: ['Ross', 'Rachel', 'Chandler'],
    }));
  });

  it('handles SET_STATE without initial state', () => {
    const action = {
      type: 'SET_STATE',
      state: new Map({
        input: 'R',
        filtered_text: List.of('Ross', 'Rachel'),
        entries: List.of('Ross', 'Rachel', 'Chandler'),
      }),
    };
    const nextState = reducer(undefined, action);

    expect(nextState).to.deep.equal(fromJS({
      input: 'R',
      filtered_text: ['Ross', 'Rachel'],
      entries: ['Ross', 'Rachel', 'Chandler'],
    }));
  });
});