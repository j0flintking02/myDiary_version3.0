import React from 'react';
import Enzyme, { shallow } from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16/build';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Notfound from '../views/notfound';

Enzyme.configure({ adapter: new Adapter() });
const store = configureStore([thunk])({});

let wrapper;

describe('NotFound Component', () => {
  beforeEach(() => {
    wrapper = shallow(
      <Notfound />,
    );
  });

  it('should render component', () => {
    expect(wrapper).toHaveLength(1);
  });
});
