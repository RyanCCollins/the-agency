import * as React from 'react';
import { Footer, Header, Box, Heading } from 'ui';
import { NavigationMenu } from 'containers';
import { Burger } from 'components';
import { SetIsMobileAction } from './actions';
import { State } from './state';
import { Main } from './styles';
import { ToggleMenuAction } from '../NavigationMenu/types';

export type StateProps = State;

export interface DispatchProps {
  actions: {
    setIsMobile: (isMobile: boolean) => SetIsMobileAction,
    toggleMenu: () => ToggleMenuAction;
  };
};

export type Props = React.Props<App> & StateProps & DispatchProps;

export default class App extends React.Component<Props, undefined> {

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
    const {
      children,
      actions,
    } = this.props;
    return (
      <Main>
        <NavigationMenu />
        <Header>
          <Box
            style={{ width: '100%' }}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Heading margin="none" tag="h2">
              Agency
            </Heading>
            <Burger onClick={actions.toggleMenu} />
          </Box>
        </Header>
        {children}
        <Footer>
          Footer
        </Footer>
      </Main>
    );
  }
}
