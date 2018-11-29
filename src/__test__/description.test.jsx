import Enzyme, { mount } from 'enzyme';
import React from 'react';
import { Link, MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16/build';
import { DescriptionTest } from '../views/description';

Enzyme.configure({ adapter: new Adapter() });
const store = configureStore([thunk])({
  message: '',
  username: ' ',
  password: '',
});

let wrapper;

describe('Description Component', () => {
  const onSubmitHandler = jest.fn();
  const createSpy = toSpy => jest.spyOn(wrapper.instance(), toSpy);

  Object.defineProperty(window.location, 'reload', {
    configurable: true,
  });

  const props = {
    history: { push: jest.fn() },
    entries: {
      entry: '',
    },
    match: {
      params: {
        id: 1,
      },
    },
  };
  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter>
        <DescriptionTest {...props} getEntry={jest.fn()} />
      </MemoryRouter>,
    );
  });

  it('should render description component', () => {
    expect(wrapper).toHaveLength(1);
  });
});
