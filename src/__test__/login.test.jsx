import Enzyme, { mount } from 'enzyme';
import React from 'react';
import { Link, MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16/build';
import { LoginTest } from '../views/login';

Enzyme.configure({ adapter: new Adapter() });
const store = configureStore([thunk])({
  message: '',
  username: ' ',
  password: '',
});

let wrapper;

describe('login Component', () => {
  const onSubmitHandler = jest.fn();
  const createSpy = toSpy => jest.spyOn(wrapper.instance(), toSpy);

  Object.defineProperty(window.location, 'reload', {
    configurable: true,
  });

  window.location.reload = jest.fn();
  const nextProps = {
    username: '',
    password: '',
    message: '',
  };

  const props = {
    username: 'dfsfds',
    password: 'wwwwww',
    history: { push: jest.fn() },
  };
  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter>
        <LoginTest user={{ username: 'jonathan', password: 'test' }}>
          <Link to="/login" />
        </LoginTest>
      </MemoryRouter>,
    );
  });

  it('should render login component', () => {
    expect(wrapper).toHaveLength(1);
  });
});
