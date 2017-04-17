import * as React from 'react';
import { Footer as FooterComponent, Image, Box, Heading } from 'ui';

export default function Footer(): JSX.Element {
  return (
    <FooterComponent>
      <Box pad="medium" flexDirection="row" alignItems="center" justifyContent="space-between">
        <Image
          alt="The Agency"
          src="https://github.com/RyanCCollins/cdn/blob/master/misc/rocket.png?raw=true"
          imageSize="thumb"
        />
        <Box flexDirection="column">
          <Heading tag="h4">
            © 2017 The Agency
          </Heading>
        </Box>
      </Box>
    </FooterComponent>
  );
};
