import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Counter from './index';

describe('<Counter />', () => {
  it('should be defined', () => {
    expect(Counter).toBeDefined();
  });
  it('should render without crashing', () => {
    const wrapper = shallow(<Counter />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('props should be numer', () => {
    const wrapper = shallow(<Counter />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
