import * as React from 'react';
import { Props } from './types';
import { Box } from 'ui';
import Nav from './nav';
import Li from './li';
import Ul from './ul';
import Heading from './heading';

export default class Presentation extends React.Component<Props, undefined> {
  public render() {
    return (
      <Nav {...this.props} onClick={this.props.actions.toggleMenu}>
        <Box pad="large" flexDirection="row" justifyContent="space-between">
          <Box>
            <Heading {...this.props} color="white" upcase>The Agency</Heading>
          </Box>
          <Ul>
            <Li>
              <Heading {...this.props} textAlign="right" tag="h2" color="white">
                Case Studies
              </Heading>
            </Li>
            <Li>
              <Heading {...this.props} textAlign="right" tag="h2" color="white">
                Clients
              </Heading>
            </Li>
            <Li>
              <Heading {...this.props} textAlign="right" tag="h2" color="white">
                About
              </Heading>
            </Li>
          </Ul>
        </Box>
      </Nav>
    );
  }
}
