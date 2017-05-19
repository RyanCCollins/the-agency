import * as types from './constants';
import { defaultAction } from 'shared/actionCreators';
import { toggleMenu } from '../NavigationMenu/actionCreators';
import { SetIsMobileAction } from './actions';

export const setIsMobile = (isMobile: boolean): SetIsMobileAction => ({
  type: types.SET_MOBILE,
  isMobile,
});

export const actionCreators = {
  setIsMobile,
  defaultAction,
  toggleMenu,
};

export default actionCreators;
