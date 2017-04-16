import * as React from 'react';
import { StateProps } from './types';
import { Heading, Section } from './styles';

export default class Presentation extends React.Component<StateProps, undefined> {
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
