import * as React from 'react';
import { Props } from './types';
import { Box, Heading } from 'ui';
import Nav from './nav';
import Li from './li';
import Ul from './ul';

export default class Presentation extends React.Component<Props, undefined> {
  public render() {
    return (
      <Nav {...this.props} onClick={this.props.actions.toggleMenu}>
        <Box pad="large" flexDirection="row" justifyContent="space-between">
          <Box>
            <Heading color="white" upcase>Agency Name</Heading>
          </Box>
          <Ul>
            <Li>
              <Heading textAlign="right" tag="h2" color="white">
                Case Studies
              </Heading>
            </Li>
            <Li>
              <Heading textAlign="right" tag="h2" color="white">
                Clients
              </Heading>
            </Li>
            <Li>
              <Heading textAlign="right" tag="h2" color="white">
                About
              </Heading>
            </Li>
          </Ul>
        </Box>
      </Nav>
    );
  }
}
