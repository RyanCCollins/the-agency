import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from 'react-apollo';
import * as React from 'react';
import Project from '../index';
import theme from '../../../theming';
import client from '../../../apolloClient';
import store from '../../../store';
import ProjectPresentation from '../presentation';

describe('<Project />', () => {
  describe('when shallow rendered', () => {
    const wrapper = mount(
      <ApolloProvider store={store} client={client}>
        <ThemeProvider theme={theme}>
          <Project />
        </ThemeProvider>
      </ApolloProvider>,
    );

    it('should create a snapshot', () => {
      expect(mountToJson(wrapper)).toMatchSnapshot();
    });

    it('should render a presentation component', () => {
      expect(wrapper.find(ProjectPresentation).length).toBe(1);
    });
  });
});
