import { State as GlobalState } from '../../state';
import { State, ErrorType } from './types';
import { createSelector, Selector } from 'reselect';

export const selectProject = () => (state: GlobalState): State => state.project;

export type SelectIsLoading = Selector<GlobalState, boolean>;
export const selectIsLoading: SelectIsLoading = createSelector(
  selectProject(),
  (project) => project.isLoading,
);

export type SelectError = Selector<GlobalState, ErrorType>;
export const selectError: SelectError = createSelector(
  selectProject(),
  (project) => project.error,
);

export type SelectData = Selector<GlobalState, string>;
export const selectData: SelectData = createSelector(
  selectProject(),
  (project) => project.data,
);
