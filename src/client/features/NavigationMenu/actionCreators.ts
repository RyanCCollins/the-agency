import * as T from './constants';
import { ToggleMenuAction } from './actions';

export const toggleMenu = (): ToggleMenuAction => ({
  type: T.TOGGLE_MENU,
});

export const actionCreators = {
  toggleMenu,
};

export default actionCreators;
