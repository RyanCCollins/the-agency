import * as React from 'react';
import { Box, Section, Headline, LoadingIndicator } from 'ui';
import { Props as ParentProps } from './types';
import Hr from '../Portfolio/hr';
import Client from './client';

export default function ClientsPresentation({
  theme,
  clients,
  loading,
  error,
}: ParentProps) {
  if (error) {
    return <p>{error}</p>;
  }
  if (loading || !clients) {
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
      <Section pad="large" alignItems="center">
        <Headline color="#666" fontWeight={700}>Clients</Headline>
        <Hr color="#666" />
      </Section>
      <Section pad={{ horizontal: 'large' }}>
        <Box
          pad="large"
          justifyContent="center"
          alignItems="center"
          flexDirection="row"
          flexWrap
        >
          {clients.map((client, i) =>
            <Client key={i} {...client} />,
          )}
        </Box>
      </Section>
    </Box>
  );
}
