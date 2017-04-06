import { combineReducers, Reducer } from 'redux';
import { routerReducer } from 'react-router-redux';
import client from './apolloClient';
/* GENERATOR-IMPORT-REDUCER */
import navigationMenu from './containers/NavigationMenu/reducer';
import home from './containers/Home/reducer';
import layoutReducer from 'containers/Layout/reducer';

export const rootReducer = combineReducers({
  /* GENERATOR-EXPORT-REDUCER */
  navigationMenu,
  home,
  layout: layoutReducer,
  routing: routerReducer,
  apollo: client.reducer() as Reducer<undefined>,
});
