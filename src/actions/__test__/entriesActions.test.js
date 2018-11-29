import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import Enzyme from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16/build';
import { getEntries, AddEntries, getEntry, update } from '../entriesActions';
import * as actions from '../types';

Enzyme.configure({ adapter: new Adapter() });
let store;
const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

describe('should test entries actions', () => {
  const mockStore = configureStore([thunk]);

  beforeEach(() => {
    store = mockStore({});
  });

  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  it('get entries', async () => {
    const successData = [];
    const responseData = {
      entries: [],
    };

    fetchMock.get('https://mydiary201808.herokuapp.com/api/v1/entries', responseData);

    const expectedActions = [{
      type: actions.GET_ENTRIES,
      payload: successData,
    }];
    store.dispatch(getEntries());
    await flushAllPromises();
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('add entries', async () => {
    const data = {
      description: 'something else',
      'entry date': '29-11-2018',
      'entry id': 11,
      title: 'Software developer',
    };
    const successData = {};
    const responseData = {};

    fetchMock.post('https://mydiary201808.herokuapp.com/api/v1/entries', responseData);

    const expectedActions = [{
      type: actions.ADD_ENTRIES,
      payload: successData,
    }];
    store.dispatch(AddEntries(data));
    await flushAllPromises();
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('get single entry', async () => {
    const data = {
      description: 'something else',
      'entry date': '29-11-2018',
      'entry id': 11,
      title: 'Software developer',
    };
    const successData = {};
    const responseData = {};

    fetchMock.get('https://mydiary201808.herokuapp.com/api/v1/entries/1', responseData);

    const expectedActions = [{
      type: actions.GET_ENTRY,
      payload: successData,
    }];
    store.dispatch(getEntry(1));
    await flushAllPromises();
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('update single entry', async () => {
    const data = {
      description: 'something else',
      'entry date': '29-11-2018',
      'entry id': 1,
      title: 'Software developer',
    };
    const successData = {};
    const responseData = {};

    fetchMock.put('https://mydiary201808.herokuapp.com/api/v1/entries/1', responseData);

    const expectedActions = [{
      type: actions.UPDATE_ENTRY,
      payload: successData,
    }];
    store.dispatch(update(1, data));
    await flushAllPromises();
    expect(store.getActions()).toEqual(expectedActions);
  });
});
