import Enzyme, { mount } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16/build';
import { SignUPTest } from '../views/signUp';

Enzyme.configure({ adapter: new Adapter() });
const store = configureStore([thunk])({
  message: '',
  username: ' ',
  password: '',
});

let wrapper;

describe('signup Component', () => {
  const onSubmitHandler = jest.fn();
  const createSpy = toSpy => jest.spyOn(wrapper.instance(), toSpy);

  Object.defineProperty(window.location, 'reload', {
    configurable: true,
  });

  window.location.reload = jest.fn();
  const nextProps = { message: '' };

  const props = {
    username: 'dfsfds',
    password: 'wwwwww',
    history: { push: jest.fn() },
  };
  beforeEach(() => {
    wrapper = mount(
      <SignUPTest createUser={jest.fn} user={{ username: '', password: '' }} />,
    );
  });

  it('should render signup component', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should simulate a click', () => {
    wrapper.setState({
      username: 'jonathan',
      password: 'test123',
    });
    wrapper.find('.btn').simulate('submit');
    expect(onSubmitHandler).toBeCalledTimes(0);
  });

  it('should call handleChange on form fill', () => {
    const spy = createSpy('onchangeHandle');
    wrapper.instance().forceUpdate();
    wrapper.find('input[name="username"]').simulate('change', { target: { value: 'john' } });
    wrapper.find('input[name="password"]').simulate('change', { target: { value: '12345' } });
    expect(spy).toBeCalled();
  });
});
