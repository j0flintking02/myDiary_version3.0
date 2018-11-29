import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import Enzyme from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16/build';
import { createUser } from '../signupAction';
import * as actions from '../types';

Enzyme.configure({ adapter: new Adapter() });
let store;
const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

describe('should test signup actions', () => {
  const mockStore = configureStore([thunk]);

  beforeEach(() => {
    store = mockStore({
      message: '',
    });
  });

  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  it('add user', async () => {
    const successData = {
      message: '',
    };
    const responseData = {
      message: '',
    };

    fetchMock.post('https://mydiary201808.herokuapp.com/api/v1/auth/signup', responseData);

    const expectedActions = [{
      type: actions.ADD_USER,
      payload: successData,
    }];
    store.dispatch(createUser({ username: 'test', password: 'test' }));
    await flushAllPromises();
    expect(store.getActions()).toEqual(expectedActions);
  });
});
