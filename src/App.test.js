import React from 'react';
import { shallow } from 'enzyme';

// Components
import App from './App';

it('App render correctly', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
