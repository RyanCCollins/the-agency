import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { SetIsMobileAction } from './actions';
import { State } from '../../state';
import actionCreators from './actionCreators';
import { ToggleMenuAction } from '../NavigationMenu/types';
import { withTheme } from 'styled-components';
import { selectIsMobile, selectBrand } from './selectors';
import Presentation from './presentation';
import { Action } from './actions';
import { State as StateProps } from './state';
import { ThemeColorMap } from '../../types';

export interface DispatchProps {
  actions: {
    setIsMobile: (isMobile: boolean) => SetIsMobileAction;
    toggleMenu: () => ToggleMenuAction;
  };
};

const mapStateToProps = (state: State): StateProps => ({
  isMobile: selectIsMobile(state),
  brandText: selectBrand(state),
});

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  actions: bindActionCreators(
    actionCreators,
    dispatch,
  ),
});

interface OwnProps { children: JSX.Element; theme: ThemeColorMap; }
export type Props = StateProps & DispatchProps & OwnProps;

class Layout extends React.Component<Props, undefined> {
  public componentDidMount() {
    window.addEventListener('resize', this.handleMobile);
  }
  public componentWillUnmount() {
    window.removeEventListener('resize', this.handleMobile);
  }
  private handleMobile = () => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile !== this.props.isMobile) {
      this.props.actions.setIsMobile(isMobile);
    }
  }
  public render() {
    return (
      <Presentation {...this.props} />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTheme(Layout));
