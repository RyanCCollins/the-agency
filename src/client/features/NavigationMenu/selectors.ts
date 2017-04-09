import { State as GlobalState } from '../../state';
import { State } from './types';
import { createSelector, Selector } from 'reselect';

export const selectNavigationMenu = () => (state: GlobalState): State => state.navigationMenu;

export type SelectIsVisible = Selector<GlobalState, boolean>;
export const selectIsVisible: SelectIsVisible = createSelector(
  selectNavigationMenu(),
  (navigationMenu) => navigationMenu.isVisible,
);
