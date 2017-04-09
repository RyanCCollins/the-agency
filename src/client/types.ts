import { Action } from 'redux';
/* GENERATOR-IMPORT */
import * as PortfolioTypes from 'features/Portfolio/types';
import * as NavigationMenuTypes from 'features/NavigationMenu/types';
import * as HomeTypes from 'features/Home/types';
import * as LayoutTypes from 'features/Layout/types';
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
