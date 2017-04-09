import { State as GlobalState } from '../../state';
import { State, ErrorType } from './types';
import { createSelector, Selector } from 'reselect';
import { Data } from './types';

export const selectPortfolio = () => (state: GlobalState): State => state.portfolio;

export type SelectIsLoading = Selector<GlobalState, boolean>;
export const selectIsLoading: SelectIsLoading = createSelector(
  selectPortfolio(),
  (portfolio) => portfolio.isLoading,
);

export type SelectError = Selector<GlobalState, ErrorType>;
export const selectError: SelectError = createSelector(
  selectPortfolio(),
  (portfolio) => portfolio.error,
);

export type SelectData = Selector<GlobalState, Data>;
export const selectData: SelectData = createSelector(
  selectPortfolio(),
  (portfolio) => portfolio.data,
);
