import * as React from 'react';
import { Box, Section, LoadingIndicator } from 'ui';
import { PageIntro } from 'components';
import { Props as ParentProps } from './types';
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
      <PageIntro title="Clients" />
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
