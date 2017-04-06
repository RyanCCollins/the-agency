import * as React from 'react';
import { Hero, Headline, Image, Box, WithAnimation, Button } from 'ui';
import { StateProps } from './types';
import Wrapper from './styles';

interface Props extends StateProps {
  section1: boolean;
  section2: boolean;
}

export default function Presentation({ section1, section2 }: Props) {
  return (
    <Wrapper>
      <Hero backgroundColor="#03A9F4">
        <Box alignItems="center" style={{ minHeight: 'calc(100vh - 100px)' }} justifyContent="center">
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
      <div id="section-one">
        <Hero backgroundColor="#9c27b0">
          <Box alignItems="center" style={{ minHeight: 'calc(100vh - 100px)' }} justifyContent="center">
            <Box style={{ maxWidth: 576 }} justifyContent="center">
              <WithAnimation type="fadeInUp" isVisible={section1}>
                <Headline color="white">
                  We are a dedicated digital agency
                </Headline>
              </WithAnimation>
            </Box>
          </Box>
        </Hero>
      </div>
      <div id="section-two">
        <Hero backgroundColor="#ff9800">
          <Box alignItems="center" style={{ minHeight: 'calc(100vh - 100px)' }} justifyContent="center">
            <Box style={{ maxWidth: 576 }} justifyContent="center">
              <WithAnimation type="fadeInUp" isVisible={section2}>
                <Headline color="white">
                  We build scalable solutions for the web and mobile platforms
                </Headline>
                <Button
                  borderColor="white"
                  backgroundColor="transparent"
                  onClick={(e) => e}
                  label="See Case Studies"
                />
              </WithAnimation>
            </Box>
          </Box>
        </Hero>
      </div>
    </Wrapper>
  );
}
