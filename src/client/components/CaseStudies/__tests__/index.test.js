import { shallow, mount } from 'enzyme';
import { shallowToJson, mountToJson } from 'enzyme-to-json';
import React from 'react';
import { CaseStudy } from 'components';
import { Box } from 'ui';
import CaseStudies from '../index';
import props from './__mocks__/caseStudies.mock';

describe('<CaseStudies />', () => {
  describe('when shallow rendered', () => {
    const wrapper = shallow(
      <CaseStudies {...props} />,
    );
    it('should create a snapshot', () => {
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('should render a CaseStudy component for each item prop', () => {
      expect(wrapper.find(CaseStudy).length).toBe(props.items.length);
    });

    it('should render a wrapper Box component', () => {
      expect(wrapper.find(Box).length).toBe(1);
    });
  });

  describe('when mount rendered', () => {
    const wrapper = mount(
      <CaseStudies {...props} />,
    );
    it('should create a snapshot', () => {
      expect(mountToJson(wrapper)).toMatchSnapshot();
    });
  });
});