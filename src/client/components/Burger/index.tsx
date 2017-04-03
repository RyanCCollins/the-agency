import * as React from 'react';
import { SvgIcon } from 'ui';
import Button from './button';
import Span from './span';

export interface Props {
  onClick: React.EventHandler<React.SyntheticEvent<{}>>;
}
export default function Burger(props: Props): JSX.Element {
  return (
    <Button {...props}>
      <Span>
        <SvgIcon viewBox="0 0 24 18" style={{ width: 24, height: 18 }}>
          <rect width="24" height="2" />
          <rect y="8" width="24" height="2" />
          <rect y="16" width="24" height="2" />
        </SvgIcon>
      </Span>
    </Button>
  );
};
