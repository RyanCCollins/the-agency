import * as React from 'react';
import { Box, WithAnimation, Heading } from 'ui';
import { Props } from './types';
import Nav from './nav';
import Li from './li';
import Ul from './ul';

export default function Presentation({
  actions,
  isVisible,
  ...props,
}: Props) {
  return (
    <Nav {...props} isVisible={isVisible} onClick={actions.toggleMenu}>
      <Box pad="large" flexDirection="row" justifyContent="space-between">
        <Box>
          <WithAnimation type="fadeInUp" isVisible={isVisible}>
            <Heading color="white" upcase>The Agency</Heading>
          </WithAnimation>
        </Box>
        <Ul>
          <Li>
            <WithAnimation type="fadeInUp" isVisible={isVisible}>
              <Heading textAlign="right" tag="h2" color="white">
                Case Studies
              </Heading>
            </WithAnimation>
          </Li>
          <Li>
            <WithAnimation type="fadeInUp" isVisible={isVisible}>
              <Heading textAlign="right" tag="h2" color="white">
                Clients
              </Heading>
            </WithAnimation>
          </Li>
          <Li>
            <WithAnimation type="fadeInUp" isVisible={isVisible}>
              <Heading textAlign="right" tag="h2" color="white">
                About
              </Heading>
            </WithAnimation>
          </Li>
        </Ul>
      </Box>
    </Nav>
  );
}
