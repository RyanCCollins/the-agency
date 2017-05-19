import * as React from 'react';
import { WithAnimation, Heading, Anchor } from 'ui';
import Li from './li';

export interface Props {
  label: string;
  path: string;
  isVisible: boolean;
}

export default function NavLink({
  label,
  path,
  isVisible,
}: Props) {
  return (
    <Li>
      <WithAnimation type="fadeInUp" isVisible={isVisible}>
        <Anchor path={path} plain>
          <Heading textAlign="right" tag="h2" color="white">
            {label}
          </Heading>
        </Anchor>
      </WithAnimation>
    </Li>
  );
}
