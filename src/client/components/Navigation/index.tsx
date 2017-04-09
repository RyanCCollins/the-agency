import * as React from 'react';
import { Header, Box, Heading, Anchor } from 'ui';
import { Burger } from 'components';

export interface Props extends React.HTMLProps<typeof Navigation> {
  onToggleMenu: () => void;
  brandText: string;
}
export default function Navigation({
  brandText,
  onToggleMenu,
}: Props): JSX.Element {
  return (
    <Header>
      <Box
        style={{ width: '100%' }}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Anchor path="/" plain>
          <Heading margin="none" tag="h3" upcase>
            {brandText}
          </Heading>
        </Anchor>
        <Burger onClick={onToggleMenu} />
      </Box>
    </Header>
  );
};
