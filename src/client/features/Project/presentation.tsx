import * as React from 'react';
import { Box, Headline, LoadingIndicator } from 'ui';
import { Props as ParentProps } from './types';
import Hr from '../Portfolio/hr';

export default function Presentation({
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
      <Box pad="large" alignItems="center">
        <Headline color="#666" fontWeight={700}>{project.title}</Headline>
        <Hr color="#666" />
      </Box>
    </Box>
  );
}
