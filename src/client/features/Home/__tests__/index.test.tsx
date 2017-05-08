import * as React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { mountToJson } from 'enzyme-to-json';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import mockStore from 'test/mockstore';
import HomeContainer from '../';
import theme from 'root/theming';
import { State } from '../state';

const testState: State = {
  isLoading: false,
  data: 'foo',
  error: new Error('Ooops'),
};

describe('HomeContainer ', () => {
  let store: Store<State>;
  beforeEach(() => {
    store = mockStore({ home: testState });
  });

  it('should create a snapshot', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <HomeContainer />
        </Provider>
      </ThemeProvider>,
    );
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});
