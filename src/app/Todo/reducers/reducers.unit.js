import { expect } from 'chai';

import reducer from './reducers';
import {
  FETCH_ITEMS,
  DELETE_ITEM,
  ADD_ITEM,
  UPDATE_ITEM,
} from '../constants/actionTypes';

describe('Todo: reducers', () => {
  /*
   *********************
   * FETCH_ITEMS
   *********************
   */

  it(`handles ${FETCH_ITEMS}_REQUEST`, () => {
    const initialState = { deleteItem: '1233' };
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

  /*
   *********************
   * DELETE_ITEM
   *********************
   */

  it(`handles ${DELETE_ITEM}_REQUEST`, () => {
    const id = '91875ABB-02DE-4821-892D-E326D83348F3';
    const initialState = {};
    const action = {
      type: `${DELETE_ITEM}_REQUEST`,
      itemId: id,
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal({
      error: null,
      isDeleting: true,
      deleteItem: id,
    });
  });

  it(`handles ${DELETE_ITEM}_SUCCESS`, () => {
    const itemId = '91875ABB-02DE-4821-892D-E326D83348F3';
    const initialState = {
      data: [
        { id: '12323', order: 0, name: 'Mon' },
        { id: itemId, order: 1, name: 'Tue' },
        { id: '28234', order: 2, name: 'Wed' },
      ],
    };
    const action = {
      type: `${DELETE_ITEM}_SUCCESS`,
      itemId,
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal({
      error: null,
      isDeleting: false,
      deleteItem: itemId,
      data: [
        { id: '12323', order: 0, name: 'Mon' },
        { id: '28234', order: 2, name: 'Wed' },
      ],
    });
  });

  it(`handles ${DELETE_ITEM}_FAILURE`, () => {
    const itemId = '91875ABB-02DE-4821-892D-E326D83348F3';
    const initialState = {};
    const action = {
      type: `${DELETE_ITEM}_FAILURE`,
      itemId,
      error: 'some error',
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal({
      error: 'some error',
      isDeleting: false,
      deleteItem: itemId,
    });
  });

  /*
   *********************
   * ADD_ITEM
   *********************
   */

  it(`handles ${ADD_ITEM}_REQUEST`, () => {
    const initialState = {};
    const action = {
      type: `${ADD_ITEM}_REQUEST`,
      itemName: 'something',
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal({
      error: null,
      isAdding: true,
    });
  });

  it(`handles ${ADD_ITEM}_SUCCESS: middle of list`, () => {
    const newItem = { id: '3244', order: 1, name: 'Tue' };
    const action = {
      type: `${ADD_ITEM}_SUCCESS`,
      item: newItem,
    };

    const data = [
      { id: '12323', order: 0, name: 'Mon' },
      { id: '28234', order: 2, name: 'Wed' },
    ];

    const initialState = {
      error: null,
      isAdding: true,
      data,
    };
    const nextState = reducer(initialState, action);
    expect(nextState).to.deep.equal({
      error: null,
      isAdding: false,
      data: [
        { id: '12323', order: 0, name: 'Mon' },
        newItem,
        { id: '28234', order: 2, name: 'Wed' },
      ],
    });
  });

  it(`handles ${ADD_ITEM}_SUCCESS: end of list`, () => {
    const newItem = { id: '3244', order: 1, name: 'Tue' };
    const action = {
      type: `${ADD_ITEM}_SUCCESS`,
      item: newItem,
    };
    const data = [
      { id: '12323', order: 0, name: 'Mon' },
    ];

    const initialState = {
      error: null,
      isAdding: true,
      data,
    };
    const nextState = reducer(initialState, action);
    expect(nextState).to.deep.equal({
      error: null,
      isAdding: false,
      data: [
        { id: '12323', order: 0, name: 'Mon' },
        newItem,
      ],
    });
  });

  it(`handles ${ADD_ITEM}_SUCCESS: empty list`, () => {
    const newItem = { id: '3244', order: 1, name: 'Tue' };
    const action = {
      type: `${ADD_ITEM}_SUCCESS`,
      item: newItem,
    };
    const data = [];

    const initialState = {
      error: null,
      isAdding: true,
      data,
    };
    const nextState = reducer(initialState, action);
    expect(nextState).to.deep.equal({
      error: null,
      isAdding: false,
      data: [
        newItem,
      ],
    });
  });

  it(`handles ${ADD_ITEM}_FAILURE`, () => {
    const initialState = {};
    const action = {
      type: `${ADD_ITEM}_FAILURE`,
      error: 'some error',
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal({
      error: 'some error',
      isAdding: false,
    });
  });

  /*
   *********************
   * UPDATE_ITEM
   *********************
   */

  it(`handles ${UPDATE_ITEM}_REQUEST`, () => {
    const initialState = {};
    const itemId = 'D98DB385-BF15-4EA5-A10A-90E7A98F106F';
    const action = {
      type: `${UPDATE_ITEM}_REQUEST`,
      itemId,
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal({
      error: null,
      isUpdating: true,
      updatingItem: itemId,
    });
  });

  it(`handles ${UPDATE_ITEM}_SUCCESS`, () => {
    const itemId = 'D98DB385-BF15-4EA5-A10A-90E7A98F106F';
    const initialState = {
      error: null,
      isUpdating: true,
      updatingItem: itemId,
      data: [
        { id: '12323', order: 0, name: 'Mon' },
        { id: itemId, order: 2, name: 'Wed' },
      ],
    };
    const action = {
      type: `${UPDATE_ITEM}_SUCCESS`,
      item: {
        id: itemId,
        order: 1,
        name: 'something',
      },
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal({
      error: null,
      isUpdating: false,
      updatingItem: itemId,
      data: [
        { id: '12323', order: 0, name: 'Mon' },
        { id: itemId, order: 1, name: 'something' },
      ],
    });
  });

  it(`handles ${UPDATE_ITEM}_FAILURE`, () => {
    const itemId = 'D98DB385-BF15-4EA5-A10A-90E7A98F106F';
    const initialState = {
      error: null,
      isUpdating: true,
      updatingItem: itemId,
    };
    const action = {
      type: `${UPDATE_ITEM}_FAILURE`,
      error: 'some error',
      itemId,
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal({
      error: 'some error',
      isUpdating: false,
      updatingItem: itemId,
    });
  });
});
