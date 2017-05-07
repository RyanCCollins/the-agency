import * as React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Main from '../main';

describe('Layout Main component ', () => {

  it('should create a snapshot', () => {
    const wrapper = shallow(
      <Main />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
