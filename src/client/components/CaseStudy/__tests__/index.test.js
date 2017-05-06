import { shallow, mount } from 'enzyme';
import { shallowToJson, mountToJson } from 'enzyme-to-json';
import React from 'react';
import { Box, Image, WithAnimation, Anchor } from 'ui';
import Overlay from '../overlay';
import Relative from '../relative';
import CaseStudy from '../index';
import props from './__mocks__/caseStudy.mock';

describe('<CaseStudy />', () => {
  describe('when shallow rendered', () => {
    const wrapper = shallow(
      <CaseStudy {...props} />,
    );
    it('should create a snapshot', () => {
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

      expect(wrapper.find(Box).length).toBe(1);
    it('should have a box component', () => {
      expect(wrapper.find(Box).length).toBe(1);
    });

    it('should have a Image component', () => {
      expect(wrapper.find(Image).length).toBe(1);
    });

    it('should have a WithAnimation component', () => {
      expect(wrapper.find(WithAnimation).length).toBe(1);
    });

    it('should have a Anchor component', () => {
      expect(wrapper.find(Anchor).length).toBe(1);
    });

    it('should have a Overlay component', () => {
      expect(wrapper.find(Overlay).length).toBe(1);
    });

    it('should have a Relative component', () => {
      expect(wrapper.find(Relative).length).toBe(1);
    });
  });

  describe('when mounted', () => {
    const wrapper = mount(
      <CaseStudy {...props} />,
    );
    
    it('should create a snapshot', () => {
      expect(mountToJson(wrapper)).toMatchSnapshot();
    });

    it('should have a handleScroll method', () => {
      expect(wrapper.instance().handleScroll).toBeDefined()
    });

    it('should have a divRef defined', () => {
      expect(wrapper.instance().divRef).toBeDefined()
    });

    it('should call handle scroll on componentDidMount', () => {
      const before = wrapper;
      const mock = jest.fn();
      wrapper.instance().handleScroll = mock;
      wrapper.instance().componentDidMount();
      expect(mock.mock.calls.length).toBe(1);
    });
  });
});