import * as T from './constants';
import {
  LoadInitiationAction,
  LoadSuccessAction,
  LoadFailureAction,
  LoadCancelAction,
  ToggleSectionAction,
} from './actions';
import { ErrorType } from './types';

export const loadInitiation = (): LoadInitiationAction => ({
  type: T.LOAD_INITIATION,
});

export const loadSuccess = (data: string): LoadSuccessAction => ({
  type: T.LOAD_SUCCESS,
  payload: data,
});

export const loadFailure = (error: ErrorType): LoadFailureAction => ({
  type: T.LOAD_FAILURE,
  payload: error,
});

export const loadCancel = (): LoadCancelAction => ({
  type: T.LOAD_CANCEL,
});

export const toggleSection = (index: number, visible: boolean): ToggleSectionAction => ({
  type: T.TOGGLE_SECTION,
  payload: {
    index,
    visible,
  },
});

export const actionCreators = {
  loadInitiation,
  loadSuccess,
  loadFailure,
  loadCancel,
  toggleSection,
};

export default actionCreators;
