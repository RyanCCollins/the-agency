import * as T from '../constants';
import reducer from '../reducer';

describe('NavigationMenu reducer', () => {
  it('should handle reducer for TOGGLE_MENU', () => {
    const before = {
      isVisible: true,
    };
    const after = {
      isVisible: false,
    };
    expect(
      reducer(before, {
        type: T.TOGGLE_MENU,
      }),
    ).toEqual(after);
  });
});
