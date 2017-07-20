import { PayloadAction } from 'root/types';
import { ErrorType, SectionPayload } from './types';
import * as T from './constants';

export interface LoadInitiationAction extends PayloadAction<undefined> {
  type: T.LOAD_INITIATION_TYPE;
}

export interface LoadSuccessAction extends PayloadAction<string> {
  type: T.LOAD_SUCCESS_TYPE;
  payload: string;
}

export interface LoadFailureAction extends PayloadAction<ErrorType> {
  type: T.LOAD_FAILURE_TYPE;
  payload: ErrorType;
}

export interface LoadCancelAction extends PayloadAction<undefined> {
  type: T.LOAD_CANCEL_TYPE;
}

export interface ToggleSectionAction extends PayloadAction<SectionPayload> {
  type: T.TOGGLE_SECTION_TYPE;
  payload: SectionPayload;
}

export type Action = LoadInitiationAction
  | LoadSuccessAction
  | LoadFailureAction
  | LoadCancelAction
  | ToggleSectionAction;
