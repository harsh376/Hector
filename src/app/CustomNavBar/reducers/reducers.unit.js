import { expect } from 'chai';

import { updateLocale } from '../actions/action_creators';
import reducer from './reducers';

describe('reducers/CustomNavBar', () => {
  it('handles UPDATE_LOCALE', () => {
    const intialData = {
      locale: 'en',
      messages: {
        'app.greeting': 'Hello',
      },
    };
    const newData = {
      locale: 'fr',
      messages: {
        'app.greeting': 'Bonjour',
      },
    };
    const initialState = intialData;
    const action = updateLocale(newData);
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal(newData);
  });

  it('handles UPDATE_LOCALE without initial state', () => {
    const data = {
      locale: 'en',
      messages: {
        'app.greeting': 'Hello',
      },
    };
    const action = updateLocale(data);
    const nextState = reducer(undefined, action);

    expect(nextState).to.deep.equal(data);
  });
});
