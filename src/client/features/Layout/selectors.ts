import { createSelector, Selector } from 'reselect';
import { State } from 'state';
import { State as LayoutState } from './state';

const selectLayout = () => (state: State): LayoutState  => state.layout;

export const selectIsMobile: Selector<State, boolean> = createSelector(
  selectLayout(),
  (layout) => layout.isMobile,
);

export const selectBrand: Selector<State, string> = createSelector(
  selectLayout(),
  (layout) => layout.brandText,
);
