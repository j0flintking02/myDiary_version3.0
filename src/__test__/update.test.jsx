import Enzyme, { mount } from 'enzyme';
import React from 'react';
import { Link, MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16/build';
import { UpdateEntryTest } from '../views/update';

Enzyme.configure({ adapter: new Adapter() });
const store = configureStore([thunk])({});

let wrapper;

describe('add Entry Component', () => {
  const onSubmitHandler = jest.fn();
  const createSpy = toSpy => jest.spyOn(wrapper.instance(), toSpy);

  Object.defineProperty(window.location, 'reload', {
    configurable: true,
  });

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter>
        <UpdateEntryTest />
      </MemoryRouter>,
    );
  });

  it('should render login component', () => {
    expect(wrapper).toHaveLength(1);
  });
});
