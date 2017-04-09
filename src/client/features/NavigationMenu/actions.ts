import { Action } from 'redux';
import { TOGGLE_MENU_TYPE } from './constants';

export interface ToggleMenuAction extends Action {
  type: TOGGLE_MENU_TYPE;
};

export type Action = ToggleMenuAction;
