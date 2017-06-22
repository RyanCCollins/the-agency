import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from 'react-apollo';
import React from 'react';
import Portfolio from '../index';
import theme from '../../../theming';
import client from '../../../apolloClient';
import store from '../../../store';

describe('<Portfolio />', () => {

  describe('when shallow rendered', () => {
    const wrapper = mount(
      <ApolloProvider store={store} client={client}>
        <ThemeProvider theme={theme}>
          <Portfolio />
        </ThemeProvider>
      </ApolloProvider>
    );

    it('should create a snapshot', () => {
      expect(mountToJson(wrapper)).toMatchSnapshot();
    });
  });
});
