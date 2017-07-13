import * as React from 'react';
import { Header, Box, Heading, Anchor } from 'ui';
import { Burger } from 'components';
import { ThemeColorMap } from '../../types';

export interface Props extends React.HTMLProps<typeof Navigation> {
  onToggleMenu: () => void;
  brandText: string;
  theme: ThemeColorMap;
}
export default function Navigation({
  brandText,
  onToggleMenu,
  theme,
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
          <Heading color={theme.light2} style={{ padding: 20 }} margin="none" tag="h3" upcase>
            {brandText}
          </Heading>
        </Anchor>
        <Burger color={theme.light2} onClick={onToggleMenu} />
      </Box>
    </Header>
  );
};
