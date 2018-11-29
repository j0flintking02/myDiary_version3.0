import loginReducer from '../loginReducer';

describe('Login Reducer', () => {
  it('should test the login reducer', () => {
    const initialState = {};
    const data = '';
    const response = {
      token: '',
    };
    expect(loginReducer(initialState, {
      type: 'LOGIN_USER',
      payload: data,
    })).toEqual(response);
  });
});
