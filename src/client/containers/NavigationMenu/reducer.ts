import * as T from './constants';
import initialState from './state';
import {
  Action,
  State,
} from './types';

const reducer = (
  state: State = initialState,
  action: Action,
): State => {
  switch (action.type) {
  case T.TOGGLE_MENU:
    return {
      ...state,
      isVisible: !state.isVisible,
    };
  default:
    return state;
  }
};

export default reducer;
