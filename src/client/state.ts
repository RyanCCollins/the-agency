/* GENERATOR-IMPORT-STATE */
import { initialState as projectState, State as ProjectState } from 'features/Project/state';
import { initialState as navigationMenuState, State as NavigationMenuState } from 'features/NavigationMenu/state';
import { initialState as homeState, State as HomeState } from 'features/Home/state';
import { initialState as layoutState, State as LayoutState } from 'features/Layout/state';

export interface State {
  /* GENERATOR-EXPORT-STATE-TYPE */
  project: ProjectState;
  navigationMenu: NavigationMenuState;
  home: HomeState;
  layout: LayoutState;
}

export const initialState: State = {
  /* GENERATOR-EXPORT-STATE */
  project: projectState,
  navigationMenu: navigationMenuState,
  home: homeState,
  layout: layoutState,
};
