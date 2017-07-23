import * as React from 'react';
import { Header, Box, Anchor } from 'ui';
import { Burger } from 'components';
import { Heading } from './styles';
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
          <Heading
            color={theme.light2}
            margin="none"
            tag="h3"
            upcase
          >
            {brandText}
          </Heading>
        </Anchor>
        <Burger color={theme.light2} onClick={onToggleMenu} />
      </Box>
    </Header>
  );
};
