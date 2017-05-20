import * as React from 'react';
import { Box, Headline, LoadingIndicator, Image, Paragraph } from 'ui';
import { Props as ParentProps } from './types';
import Hr from '../Portfolio/hr';

function Client({
  image,
  name,
}) {
  return (
    <Box pad="large" alignItems="center">
      <Image alt={`${name} logo`} src={image} imageSize="medium" />
      <Paragraph color="#666">{name}</Paragraph>
    </Box>
  );
}

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
      <Box pad="large" alignItems="center">
        <Headline color="#666" fontWeight={700}>Clients</Headline>
        <Hr color="#666" />
      </Box>
      <Box pad="large" alignItems="center">
        {clients.map((client) =>
          <Client {...client} />,
        )}
      </Box>
    </Box>
  );
}
