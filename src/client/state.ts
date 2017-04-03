/* GENERATOR-IMPORT-STATE */
import { initialState as navigationMenuState, State as NavigationMenuState } from './containers/NavigationMenu/state';
import { initialState as homeState, State as HomeState } from './containers/Home/state';
import { initialState as appState, State as AppState } from 'containers/App/state';

export interface State {
  /* GENERATOR-EXPORT-STATE-TYPE */
  navigationMenu: NavigationMenuState;
  home: HomeState;
  app: AppState;
}

export const initialState: State = {
  /* GENERATOR-EXPORT-STATE */
  navigationMenu: navigationMenuState,
  home: homeState,
  app: appState,
};
