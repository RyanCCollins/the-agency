import * as React from 'react';
import { NavigationMenu } from 'features';
import { Navigation, Footer } from 'components';
import Main from './main';
import Div from './div';
import { Props } from './types';

export default function Presentation({
  children,
  actions,
  brandText,
  theme,
}: Props) {
  return (
    <Main>
      <NavigationMenu />
      <Navigation
        theme={theme}
        brandText={brandText}
        onToggleMenu={actions.toggleMenu}
      />
      <Div>
        {React.cloneElement(children)}
      </Div>
      <Footer />
    </Main>
  );
}
