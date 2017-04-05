import * as React from 'react';
import { StateProps } from './types';
import Wrapper from './styles';
import { Hero, Headline, Image, Box } from 'ui';

export default class Presentation extends React.Component<StateProps, undefined> {
  public render() {
    return (
      <Wrapper>
        <Hero backgroundColor="#03A9F4" full>
          <Box alignItems="center" boxSize="full" justifyContent="center">
            <Image
              alt="The Agency"
              src="https://github.com/RyanCCollins/cdn/blob/master/misc/rocket.png?raw=true"
              size={300}
            />
            <Headline color="white">
              The Agency
            </Headline>
          </Box>
        </Hero>
      </Wrapper>
    );
  }
}
