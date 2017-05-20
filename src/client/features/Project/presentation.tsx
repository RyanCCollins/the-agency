import * as React from 'react';
import { Box, Headline, LoadingIndicator, Hero, Article } from 'ui';
import { Props as ParentProps } from './types';
import Hr from '../Portfolio/hr';

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
      <Hero height={650} backgroundImage={project.image} />
      <Box pad="large" alignItems="center">
        <Headline color="#666" fontWeight={700}>{project.title}</Headline>
        <Hr color="#666" />
        <Article pad="large" content={project.content} />
      </Box>
    </Box>
  );
}
