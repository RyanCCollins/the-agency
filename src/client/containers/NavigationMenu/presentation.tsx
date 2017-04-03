import * as React from 'react';
import { Props } from './types';
import Nav from './styles';

export default class Presentation extends React.Component<Props, undefined> {
  public render() {
    return (
      <Nav {...this.props} onClick={this.props.actions.toggleMenu}>
        Best Nav Ever!
      </Nav>
    );
  }
}
