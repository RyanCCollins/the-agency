import * as React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Container from '../';
import State from '../state';
import mockStore from '../../../test/mockstore';
import theme from '../../../theming';

const testState: State = {
  isMobile: true,
  brandText: 'The Agency',
};

describe('Layout Container ', () => {
  let store: Store<State>;
  beforeEach(() => {
    store = mockStore({ layout: testState });
  });

  it('should render with default props', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Container />
        </ThemeProvider>
      </Provider>,
    );
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});
