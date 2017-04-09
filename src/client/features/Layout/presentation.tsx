import * as React from 'react';
import { NavigationMenu } from 'features';
import { Navigation } from 'components';
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
      <Navigation brandText={brandText} onToggleMenu={actions.toggleMenu} />
      {React.cloneElement(children)}
    </Main>
  );
}
