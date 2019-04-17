import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Title } from '../App';
import Footer from './index';

describe('<Footer />', () => {
  it('should be defined', () => {
    expect(Footer).toBeDefined();
  });
  it('should render without crashing', () => {
    const footer = shallow(<Footer />);
    expect(shallowToJson(footer)).toMatchSnapshot();
  });
  it('props players should be array', () => {
    const header = shallow(<Footer addScore={false} />);
    const addScore = true;
    header.setProps({ addScore });
    expect(header.contains(<Title>Dodaj swój wynik</Title>)).toBeTruthy();
    expect(shallowToJson(header)).toMatchSnapshot();
  });
});
