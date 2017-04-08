import { Action } from 'redux';
/* GENERATOR-IMPORT */
import * as PortfolioTypes from './containers/Portfolio/types';
import * as NavigationMenuTypes from './containers/NavigationMenu/types';
import * as HomeTypes from './containers/Home/types';
import * as LayoutTypes from 'containers/Layout/types';
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
  PortfolioTypes,
  NavigationMenuTypes,
  HomeTypes,
  LayoutTypes,
};
