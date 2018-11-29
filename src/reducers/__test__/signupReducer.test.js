import signupReducer from '../signupReducer';

describe('signup Reducer', () => {
  it('should test the signup reducer', () => {
    const initialState = {
      message: '',
    };
    const data = {
      message: '',
    };
    const response = {
      message: '',
    };
    expect(signupReducer(initialState, {
      type: 'ADD_USER',
      payload: data,
    })).toEqual(response);
  });
});
