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
  case T.TOGGLE_SECTION:
    return {
      ...state,
      sections: [
        ...state.sections.slice(0, action.payload.index),
        {
          ...state.sections[action.payload.index],
          isVisible: action.payload.visible,
        },
        ...state.sections.slice(action.payload.index + 1),
      ],
    };
  case T.LOAD_INITIATION:
    return {
      ...state,
      isLoading: true,
    };
  case T.LOAD_SUCCESS:
    return {
      ...state,
      isLoading: false,
      data: action.payload,
    };
  case T.LOAD_FAILURE:
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  default:
    return state;
  }
};

export default reducer;
