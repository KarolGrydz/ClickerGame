import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Title } from '../App';
import Header from './index';

describe('<Header />', () => {
  it('should be defined', () => {
    expect(Header).toBeDefined();
  });
  it('should render without crashing', () => {
    const header = shallow(<Header />);
    expect(shallowToJson(header)).toMatchSnapshot();
  });
  it('should return add score title if true', () => {
    const header = shallow(<Header addScore={false} />);
    const addScore = true;
    header.setProps({ addScore });
    expect(header.contains(<Title>Dodaj swój wynik</Title>)).toBeTruthy();
    expect(shallowToJson(header)).toMatchSnapshot();
  });
});
