import React from 'react';
import Counter from './counter';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

let counter = null;
beforeEach(() => {
  counter = shallow(<Counter />);
});

test('Counter should initialize as 0', () => {
  expect(counter.find('span').text()).toBe('0');
});

test('Counter should be 1 after click', () => {
  counter.find('Button').simulate('click');
  expect(counter.find('span').text()).toBe('1');
});
