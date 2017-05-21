import { State as GlobalState } from '../../state';
import { State, ErrorType, Section } from './types';
import { createSelector, Selector } from 'reselect';

export const selectHome = () => (state: GlobalState): State => state.home;

export type SelectIsLoading = Selector<GlobalState, boolean>;
export const selectIsLoading: SelectIsLoading = createSelector(
  selectHome(),
  (home) => home.isLoading,
);

export type SelectError = Selector<GlobalState, ErrorType>;
export const selectError: SelectError = createSelector(
  selectHome(),
  (home) => home.error,
);

export type SelectData = Selector<GlobalState, string>;
export const selectData: SelectData = createSelector(
  selectHome(),
  (home) => home.data,
);

export type SelectSections = Selector<GlobalState, Section[]>;
export const selectSections: SelectSections = createSelector(
  selectHome(),
  (home) => home.sections,
);
