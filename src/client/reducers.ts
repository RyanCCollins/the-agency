import { combineReducers, Reducer } from 'redux';
import { routerReducer } from 'react-router-redux';
import client from './apolloClient';
/* GENERATOR-IMPORT-REDUCER */
import project from 'features/Project/reducer';
import portfolio from 'features/Portfolio/reducer';
import navigationMenu from 'features/NavigationMenu/reducer';
import home from 'features/Home/reducer';
import layoutReducer from 'features/Layout/reducer';

export const rootReducer = combineReducers({
  /* GENERATOR-EXPORT-REDUCER */
  project,
  portfolio,
  navigationMenu,
  home,
  layout: layoutReducer,
  routing: routerReducer,
  apollo: client.reducer() as Reducer<undefined>,
});
