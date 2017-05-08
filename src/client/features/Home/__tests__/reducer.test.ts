import * as T from '../constants';
import reducer from '../reducer';
import initialState from '../state';

describe('Home reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {}),
    ).toEqual(initialState);
  });
  it('should handle reducer for action LOAD_INITIATION', () => {
    const stateBefore = {
      isLoading: false,
    };
    const stateAfter = {
      isLoading: true,
    };
    expect(
      reducer(stateBefore, {
        type: T.LOAD_INITIATION,
      }),
    ).toEqual(stateAfter);
  });
  it('should handle reducer for action LOAD_SUCCESS', () => {
    const payload = 'foo';
    const stateBefore = {
      isLoading: true,
      data: null,
    };
    const stateAfter = {
      isLoading: false,
      data: payload,
    };
    expect(
      reducer(stateBefore, {
        type: T.LOAD_SUCCESS,
        payload,
      }),
    ).toEqual(stateAfter);
  });
  it('should handle reducer for action LOAD_FAILURE', () => {
    const error = new Error('Ooops');
    const stateBefore = {
      isLoading: true,
      error: null,
    };
    const stateAfter = {
      isLoading: false,
      error,
    };
    expect(
      reducer(stateBefore, {
        type: T.LOAD_FAILURE,
        payload: error,
      }),
    ).toEqual(stateAfter);
  });
});