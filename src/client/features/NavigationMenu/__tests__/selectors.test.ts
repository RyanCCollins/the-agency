import { State as GlobalState } from '../../../state';
import * as S from '../selectors';
import initialState from '../state';

const state: GlobalState = {
  navigationMenu: initialState,
  home: {},
  layout: {},
};

describe('NavigationMenu selectors', () => {

  it('should handle selectIsVisible', () => {
    expect(S.selectIsVisible(state)).toBe(false);
  });

});
