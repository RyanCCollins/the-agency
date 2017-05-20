import * as React from 'react';
import { Box, Image } from 'ui';

export default function Client({
  image,
  name,
}) {
  return (
    <Box pad="large" alignItems="center">
      <Image alt={`${name} logo`} src={image} imageSize="xsmall" />
    </Box>
  );
}
