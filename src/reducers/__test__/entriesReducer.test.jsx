import entriesReducer from '../entriesReducer';

describe('Entries Reducer', () => {
  it('should test the get entries reducer', () => {
    const initialState = {};
    const data = [];
    const response = {
      entries: [],
    };
    expect(entriesReducer(initialState, {
      type: 'GET_ENTRIES',
      payload: data,
    })).toEqual(response);
  });

  it('should test the add entries reducer', () => {
    const initialState = {};
    const data = [];
    const response = { };
    expect(entriesReducer(initialState, {
      type: 'ADD_ENTRIES',
      payload: data,
    })).toEqual(response);
  });
  it('should test the get single entries reducer', () => {
    const initialState = {};
    const data = [];
    const response = { };
    expect(entriesReducer(initialState, {
      type: 'GET_ENTRY',
      payload: data,
    })).toEqual(response);
  });
  it('should test the update single entries reducer', () => {
    const initialState = {};
    const data = [];
    const response = { };
    expect(entriesReducer(initialState, {
      type: 'UPDATE_ENTRY',
      payload: data,
    })).toEqual(response);
  });
});
