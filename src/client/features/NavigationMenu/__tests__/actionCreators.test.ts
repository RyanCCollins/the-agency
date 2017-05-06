import * as T from '../constants';
import * as ActionCreators from '../actionCreators';

describe('NavigationMenu ActionCreators', () => {
  it('should have a type of TOGGLE_MENU', () => {
    const expected = {
      type: T.TOGGLE_MENU,
    };
    expect(ActionCreators.toggleMenu()).toEqual(expected);
  });
});
