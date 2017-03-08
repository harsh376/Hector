import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import {
  fetchItems,
  deleteItem,
  addItem,
  updateItem,
} from './actionCreators';
import {
  FETCH_ITEMS,
  DELETE_ITEM,
  ADD_ITEM,
  UPDATE_ITEM,
} from '../constants/actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<Todo />: fetchItems', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it(`dispatches ${FETCH_ITEMS}_SUCCESS when fetching items has been done`, () => {
    nock('http://localhost')
      .get('/api/items')
      .reply(200, {
        items: [1, 2, 3],
      });

    const expectedActions = [
      { type: `${FETCH_ITEMS}_REQUEST` },
      {
        type: `${FETCH_ITEMS}_SUCCESS`,
        items: [1, 2, 3],
      },
    ];
    const store = mockStore({});

    return store.dispatch(fetchItems())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it(`dispatches ${DELETE_ITEM}_SUCCESS when deleting items has been done`, () => {
    const id = 1;

    nock('http://localhost/')
      .delete(`/api/items/${id}`)
      .reply(201, {
        id,
      });

    const expectedActions = [
      {
        type: `${DELETE_ITEM}_REQUEST`,
        itemId: id,
      },
      {
        type: `${DELETE_ITEM}_SUCCESS`,
        itemId: id,
      },
    ];
    const store = mockStore({});

    return store.dispatch(deleteItem(id))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });


  it(`dispatches ${ADD_ITEM}_SUCCESS when adding items has been done`, () => {
    const itemName = 'something';
    const item = {
      name: itemName,
      order: 0,
      id: 1,
    };

    nock('http://localhost/')
      .post('/api/items')
      .reply(201, item);

    const expectedActions = [
      {
        type: `${ADD_ITEM}_REQUEST`,
        itemName,
      },
      {
        type: `${ADD_ITEM}_SUCCESS`,
        item,
      },
    ];
    const store = mockStore({});

    return store.dispatch(addItem(itemName))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });


  it(`dispatches ${UPDATE_ITEM}_SUCCESS when updating items has been done`, () => {
    const id = 1;
    const newValue = 'newValue';
    const item = {
      id,
      name: newValue,
      order: 0,
    };

    nock('http://localhost/')
      .patch(`/api/items/${id}`)
      .reply(201, item);

    const expectedActions = [
      {
        type: `${UPDATE_ITEM}_REQUEST`,
        itemId: id,
      },
      {
        type: `${UPDATE_ITEM}_SUCCESS`,
        item,
      },
    ];
    const store = mockStore({});

    return store.dispatch(updateItem(id))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
