import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import Enzyme from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16/build';
import { loginUser } from '../loginActions';
import * as actions from '../types';

Enzyme.configure({ adapter: new Adapter() });
let store;
const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

describe('should test login actions', () => {
  const mockStore = configureStore([thunk]);

  beforeEach(() => {
    store = mockStore({
      token: '',
    });
  });

  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  it('add user', async () => {
    const successData = {
      token: '',
    };
    const responseData = {
      token: '',
    };

    fetchMock.post('https://mydiary201808.herokuapp.com/api/v1/auth/login', responseData);

    const expectedActions = [{
      type: actions.LOGIN_USER,
      payload: successData,
    }];
    store.dispatch(loginUser({ username: 'test', password: 'test' }));
    await flushAllPromises();
    expect(store.getActions()).toEqual(expectedActions);
  });
});
