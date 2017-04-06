import * as React from 'react';
import { Header, Box, Heading } from 'ui';
import { NavigationMenu } from 'containers';
import { Burger } from 'components';
import { Main } from './styles';
import { Props } from './types';

export default function Presentation({
  children,
  actions,
  brandText,
}: Props) {
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
          <Heading margin="none" tag="h3" upcase>
            {brandText}
          </Heading>
          <Burger onClick={actions.toggleMenu} />
        </Box>
      </Header>
      {children}
    </Main>
  );
}
