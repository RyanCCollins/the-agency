import * as React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { mountToJson } from 'enzyme-to-json';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import mockStore from '../../../test/mockstore';
import theme from '../../../theming';
import HomeContainer from '../';
import { State } from '../state';
import Presentation from '../presentation';

const testState: State = {
  isLoading: false,
  data: 'foo',
  error: new Error('Ooops'),
};

describe('HomeContainer ', () => {
  const store: Store<State> = mockStore({ home: testState });

  const wrapper = mount(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HomeContainer />
      </ThemeProvider>
    </Provider>,
  );

  it('should create a snapshot', () => {
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });

  it('should render a Presentation component', () => {
    expect(wrapper.find(Presentation).length).toBe(1);
  });
});
