import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import App from './index';
import Header from '../Header/index';
import Home from '../Home/index';
import Footer from '../Footer/index';

describe('<App />', () => {
  it('should be defined', () => {
    expect(App).toBeDefined();
  });
  it('should render without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Header />)).toBeTruthy();
    expect(wrapper.containsMatchingElement(<Home />)).toBeTruthy();
    expect(wrapper.containsMatchingElement(<Footer />)).toBeTruthy();
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
