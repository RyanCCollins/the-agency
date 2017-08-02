import * as React from 'react';
import styled from 'styled-components';
import { Box, Headline, LoadingIndicator, Hero, Heading, Paragraph, Image } from 'ui';
import Hr from 'components/PageIntro/hr';
import { Props as ParentProps } from './types';

const BadgeValue = styled.span`
  font-size: 58px;
  line-height: 1.10345;
  font-weight: 700;
  color: #000000;
  letter-spacing: .005em;
  font-family: 'Open Sans', sans-serif;
`;

const BadgeUnit = styled.span`
  font-size: 31px;
  line-height: 1.12917;
  color: #000000;
  font-weight: 800;
  letter-spacing: .011em;
  font-family: 'Open Sans', sans-serif;
`;

const BadgeCaption = styled.span`
  font-size: 14px;
  color: #666;
  line-height: 1.28583;
  font-weight: 800;
  text-transform: lowercase;
  letter-spacing: -.01em;
  font-family: 'Open Sans', sans-serif;
`;

function Badge({ value, caption, unit }) {
  return (
    <Box margin={{ vertical: 'small' }}>
      <BadgeValue>
        {value}
        <BadgeUnit>
          {unit}
        </BadgeUnit>
      </BadgeValue>
      <BadgeCaption>
        {caption}
      </BadgeCaption>
    </Box>
  );
}

export default function ProjectPresentation({
  theme,
  project,
  loading,
  error,
}: ParentProps) {
  if (error) {
    return <p>{error}</p>;
  }
  if (loading || !project) {
    return (
      <Box
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: 'calc(100vh - 100px)' }}
        backgroundColor={theme.offwhite}
      >
        <Box pad="large" alignItems="center">
          <LoadingIndicator isLoading />
        </Box>
      </Box>
    );
  }
  return (
    <Box alignItems="center" backgroundColor={theme.offwhite}>
      <Hero height={450} backgroundImage={project.image} />
      <Box pad="large" alignItems="center">
        <Headline color="#666" fontWeight={700}>{project.title}</Headline>
        <Hr color="#666" />
      </Box>
      <Box
        style={{ width: '100vw', maxHeight: 800 }}
        backgroundColor="white"
        flexDirection="column"
        flexWrap
        pad="small"
        alignItems="center"
      >
        <Box
          style={{ width: 'calc(50% - 12px)', height: '100%', flexGrow: 1 }}
          backgroundColor="#f5f5f5"
          justifyContent="center"
          alignItems="center"
          pad="large"
        >
          <Heading margin="small" color="#000000" tag="h3">
            State of the art
          </Heading>
          <Paragraph style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel posuere neque. Curabitur imperdiet nulla eu odio gravida, in ultrices est pretium. Morbi ullamcorper nibh id leo mattis, vitae scelerisque lorem consectetur. Maecenas pellentesque efficitur eros nec facilisis. Donec fermentum ligula convallis faucibus condimentum. In porttitor augue sed odio efficitur feugiat. Aliquam viverra semper ex at suscipit. Aliquam erat volutpat. Donec sollicitudin dapibus felis, ut ultricies diam sodales in. Suspendisse porta dui enim, faucibus suscipit ante accumsan vel. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          </Paragraph>
        </Box>
        <Box
          style={{ width: 'calc(50% - 12px)', height: '100%', flexGrow: 1 }}
          backgroundColor="#f5f5f5"
          justifyContent="center"
          alignItems="center"
          pad="large"
        >
          <Badge
            value="6"
            unit="total"
            caption="Microservices"
          />
          <Badge
            value="33"
            unit="ms"
            caption="Time to first byte"
          />
          <Badge
            value="150"
            unit="total"
            caption="Components built"
          />
        </Box>
      </Box>
      <Box
        style={{ width: '100vw', maxHeight: 800 }}
        backgroundColor="white"
        flexDirection="column"
        flexWrap
        pad="small"
        alignItems="center"
      >
        <Box
          style={{ width: 'calc(100% - 12px)', height: '100%', flexGrow: 1 }}
          backgroundColor="#f5f5f5"
          justifyContent="center"
          alignItems="center"
          pad="large"
        >
          <Headline margin="small" color="#000000">
            World class UX
          </Headline>
          <Paragraph style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nullam vel posuere neque. Curabitur imperdiet nulla eu 
            odio gravida, in ultrices est pretium. Morbi ullamcorper 
            nibh id leo mattis, vitae scelerisque lorem consectetur. 
            Maecenas pellentesque efficitur eros nec facilisis. Donec 
            fermentum ligula convallis faucibus condimentum. In porttitor 
            augue sed odio efficitur feugiat. Aliquam viverra semper ex at 
            suscipit. Aliquam erat volutpat. Donec sollicitudin dapibus 
            felis, ut ultricies diam sodales in. Suspendisse porta dui 
            enim, faucibus suscipit ante accumsan vel.
          </Paragraph>
        </Box>
      </Box>
      <Box
        style={{ width: '100vw', maxHeight: 800 }}
        backgroundColor="white"
        flexDirection="column"
        flexWrap
        pad="small"
        alignItems="center"
      >
        <Box
          style={{ width: 'calc(50% - 12px)', height: '100%', flexGrow: 1 }}
          backgroundColor="#f5f5f5"
          justifyContent="center"
          alignItems="center"
          pad="large"
        >
          <Image
            alt="Brand Central Home"
            src="https://github.com/RyanCCollins/cdn/blob/master/brand-central/homepage-full.png?raw=true"
            imageSize="small"
          />
        </Box>
        <Box
          style={{ width: 'calc(50% - 12px)', height: '100%', flexGrow: 1 }}
          backgroundColor="#f5f5f5"
          justifyContent="center"
          alignItems="center"
          pad="large"
        >
          <Heading margin="small" color="#000000" tag="h3">
            Design meets Performance
          </Heading>
          <Paragraph style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nullam vel posuere neque. Curabitur imperdiet nulla eu 
            odio gravida, in ultrices est pretium. Morbi ullamcorper 
            nibh id leo mattis, vitae scelerisque lorem consectetur. 
            Maecenas pellentesque efficitur eros nec facilisis. Donec 
            fermentum ligula convallis faucibus condimentum. In porttitor 
            augue sed odio efficitur feugiat. Aliquam viverra semper ex at 
            suscipit. Aliquam erat volutpat. Donec sollicitudin dapibus 
            felis, ut ultricies diam sodales in. Suspendisse porta dui 
            enim, faucibus suscipit ante accumsan vel.
          </Paragraph>
        </Box>
      </Box>
      <Box
        style={{ width: '100vw', maxHeight: 800 }}
        backgroundColor="white"
        flexDirection="column"
        flexWrap
        pad="small"
        alignItems="center"
      >
        <Box
          style={{ width: 'calc(100% - 12px)', height: '100%', flexGrow: 1 }}
          backgroundColor="#f5f5f5"
          justifyContent="center"
          alignItems="center"
          pad="large"
        >
          <Image
            src="https://github.com/RyanCCollins/cdn/blob/master/brand-central/tilespage-top2.png?raw=true"
            alt="Tiles Page"
            imageSize="xlarge"
          />
        </Box>
      </Box>
    </Box>
  );
}
