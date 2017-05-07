import * as React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Div from '../div';

describe('Layout Div component ', () => {

  it('should create a snapshot', () => {
    const wrapper = shallow(
      <Div />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
