import * as React from 'react';
import { Box, WithAnimation, Heading, Anchor } from 'ui';
import { Props } from './types';
import Nav from './nav';
import Ul from './ul';
import NavLink from './navLink';

export default function NavigationMenuPresentation({
  actions,
  isVisible,
  navLinks,
  ...props,
}: Props) {
  return (
    <Nav {...props} isVisible={isVisible} onClick={actions.toggleMenu}>
      <Box pad="large" flexDirection="row" justifyContent="space-between">
        <Box>
          <WithAnimation type="fadeInUp" isVisible={isVisible}>
            <Anchor path="/" plain>
              <Heading color="white" upcase>The Agency</Heading>
            </Anchor>
          </WithAnimation>
        </Box>
        <Ul>
          {navLinks.map((link, i) =>
            <NavLink {...link} key={`nav-link-${i}`} isVisible={isVisible} />,
          )}
        </Ul>
      </Box>
    </Nav>
  );
}
