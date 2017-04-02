import { combineReducers, Reducer } from 'redux';
import { routerReducer } from 'react-router-redux';
import client from './apolloClient';
/* GENERATOR-IMPORT-REDUCER */
import home from './containers/Home/reducer';
import appReducer from 'containers/App/reducer';

export const rootReducer = combineReducers({
  /* GENERATOR-EXPORT-REDUCER */
  home,
  app: appReducer,
  routing: routerReducer,
  apollo: client.reducer() as Reducer<undefined>,
});
