import * as React from 'react';
import HeaderComponent from './header';
import getNextState, { HeaderState } from './utils';

export interface Props {
  backgroundColor?: string;
}

export interface State {
  headerState: HeaderState;
}

export default class Header extends React.Component<Props, State> {
  public constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      headerState: {
        state: 'Pinned',
        position: 0,
      },
    };
  }
  public componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.handleScroll);
    }
  }
  public componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
  private handleScroll() {
    const header = document.getElementsByTagName('header')[0];
    const nextState = getNextState(window, header, this.state.headerState);
    this.setState({
      headerState: nextState,
    });
  }
  public render() {
    const {
      children,
      ...rest,
    } = this.props;
    return (
      <HeaderComponent
        {...rest}
        state={this.state.headerState.state}
      >
        {children}
      </HeaderComponent>
    );
  }
}
