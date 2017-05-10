import { actionCreators } from '../actionCreators';
import * as types from '../constants';

describe('Layout actionCreators', () => {

  it('should properly create SET_MOBILE action with isMobile = true', () => {
    expect(
      actionCreators.setIsMobile(true)
    ).toEqual({
      type: types.SET_MOBILE,
      isMobile: true,
    });
  });

  it('should properly create SET_MOBILE action with isMobile = false', () => {
    expect(
      actionCreators.setIsMobile(false)
    ).toEqual({
      type: types.SET_MOBILE,
      isMobile: false,
    });
  });

});
