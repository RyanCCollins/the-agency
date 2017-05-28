import * as React from 'react';
import { Hero, Headline, Image, Box, WithAnimation, Button } from 'ui';
import { Props as HomeProps, Section } from './types';
import Wrapper from './wrapper';

interface Props extends HomeProps {
  sections: Section[];
}

export default function HomePresentation({ sections, theme }: Props) {
  return (
    <Wrapper>
      <Hero backgroundColor={theme.primary}>
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
      {sections.map((section, i) =>
        <div key={`section${i}`} id={`section${i}`}>
          <Hero backgroundColor={theme[section.color]}>
            <Box alignItems="center" style={{ minHeight: 'calc(100vh - 100px)' }} justifyContent="center">
              <Box style={{ maxWidth: 576 }} justifyContent="center">
                <WithAnimation type="fadeInUp" isVisible={section.isVisible}>
                  <Headline color={section.button ? theme[section.button.color] : theme.white1}>
                    {section.text}
                  </Headline>
                  {section.button &&
                    <Button
                      color={theme[section.button.color]}
                      borderColor={theme[section.button.color]}
                      backgroundColor="transparent"
                      path={section.button.path}
                      label={section.button.label}
                    />
                  }
                </WithAnimation>
              </Box>
            </Box>
          </Hero>
        </div>,
      )}
    </Wrapper>
  );
}
