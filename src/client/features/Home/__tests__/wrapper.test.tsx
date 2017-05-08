import * as React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Wrapper from '../wrapper';

describe('Home Wrapper component ', () => {

  it('should create a snapshot', () => {
    const wrapper = shallow(
      <Wrapper />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
