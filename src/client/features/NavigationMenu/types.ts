import { ActionCreatorsMapObject } from 'redux';
import { ToggleMenuAction } from './actions';

export { State } from './state';
export { Props, StateProps, DispatchProps } from './';
export { ActionType } from './constants';
export { Action } from './actions';
export { ToggleMenuAction };

export interface ActionMap extends ActionCreatorsMapObject {
  toggleMenu: () => ToggleMenuAction;
}
