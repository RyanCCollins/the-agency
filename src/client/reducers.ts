import { combineReducers, Reducer } from 'redux';
import { routerReducer } from 'react-router-redux';
import client from './apolloClient';
/* GENERATOR-IMPORT-REDUCER */
import navigationMenu from './containers/NavigationMenu/reducer';
import home from './containers/Home/reducer';
import appReducer from 'containers/App/reducer';

export const rootReducer = combineReducers({
  /* GENERATOR-EXPORT-REDUCER */
  navigationMenu,
  home,
  app: appReducer,
  routing: routerReducer,
  apollo: client.reducer() as Reducer<undefined>,
});
