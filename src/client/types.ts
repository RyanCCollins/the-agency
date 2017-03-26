import { Action } from 'redux';
/* GENERATOR-IMPORT */
import * as AppTypes from 'containers/App/types';
export { ThemeColorMap } from './theming/types';

export interface PayloadAction<P> extends Action {
  type: string;
  payload?: P;
}

export interface FormControlEventTarget extends EventTarget {
  value: string;
}

export {
  /* GENERATOR-EXPORT */
  AppTypes,
};
