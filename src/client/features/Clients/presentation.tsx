import * as React from 'react';
import { Props as ParentProps } from './types';
import { Heading, Section } from './styles';

export interface Props extends ParentProps {
  // own props
}
export default class Presentation extends React.Component<Props, undefined> {
  public render() {
    return (
      <Section>
        <Heading>
          Best container ever!
        </Heading>
      </Section>
    );
  }
}
