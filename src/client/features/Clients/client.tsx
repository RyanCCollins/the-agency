import * as React from 'react';
import { Box, Image, Anchor } from 'ui';

export default function Client({
  image,
  url,
  name,
}) {
  return (
    <Box style={{ flexBasis: '33%' }} pad="large" alignItems="center">
      <Anchor href={url} plain>
        <Image alt={`${name} logo`} src={image} imageSize="small" />
      </Anchor>
    </Box>
  );
}
