import { actionCreators } from '../actionCreators';
import * as T from '../constants';

describe('Home actionCreators', () => {

  it('should create an action with type of LOAD_INITIATION', () => {
    expect(actionCreators.loadInitiation()).toEqual({
      type: T.LOAD_INITIATION,
    });
  });

  it('should create an action with type of LOAD_SUCCESS', () => {
    const payload = 'foo';
    expect(actionCreators.loadSuccess(payload)).toEqual({
      type: T.LOAD_SUCCESS,
      payload,
    });
  });

  it('should create an action with type of LOAD_FAILURE', () => {
    const error = { message: 'oops' };
    expect(actionCreators.loadFailure(error)).toEqual({
      type: T.LOAD_FAILURE,
      payload: error,
    });
  });

  it('should create an acction with type of LOAD_CANCEL', () => {
    expect(actionCreators.loadCancel()).toEqual({
      type: T.LOAD_CANCEL,
    });
  });

});
