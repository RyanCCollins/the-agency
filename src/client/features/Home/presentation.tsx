import * as React from 'react';
import { Hero, Headline, Image, Box, WithAnimation, Button } from 'ui';
import { Props as HomeProps } from './types';
import Wrapper from './styles';

interface Props extends HomeProps {
  section1: boolean;
  section2: boolean;
}

export default function Presentation({ section1, section2, theme }: Props) {
  return (
    <Wrapper>
      <Hero style={{ marginTop: -100, paddingTop: 100 }} backgroundColor={theme.primary}>
        <Box alignItems="center" style={{ minHeight: 'calc(100vh - 100px)' }} justifyContent="center">
          <Image
            alt="The Agency"
            src="https://github.com/RyanCCollins/cdn/blob/master/misc/rocket.png?raw=true"
            size={300}
          />
          <Headline color={theme.white1}>
            The Agency
          </Headline>
        </Box>
      </Hero>
      <div id="section-one">
        <Hero backgroundColor={theme.secondary}>
          <Box alignItems="center" style={{ minHeight: 'calc(100vh - 100px)' }} justifyContent="center">
            <Box style={{ maxWidth: 576 }} justifyContent="center">
              <WithAnimation type="fadeInUp" isVisible={section1}>
                <Headline color={theme.white1}>
                  We are a dedicated digital agency
                </Headline>
              </WithAnimation>
            </Box>
          </Box>
        </Hero>
      </div>
      <div id="section-two">
        <Hero backgroundColor={theme.light3}>
          <Box alignItems="center" style={{ minHeight: 'calc(100vh - 100px)' }} justifyContent="center">
            <Box style={{ maxWidth: 576 }} justifyContent="center">
              <WithAnimation type="fadeInUp" isVisible={section2}>
                <Headline color={theme.white1}>
                  We build scalable solutions for the web and mobile platforms
                </Headline>
                <Button
                  borderColor={theme.white1}
                  backgroundColor="transparent"
                  path="/case-studies"
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
