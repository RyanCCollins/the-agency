import * as React from 'react';
import { Image, Anchor } from 'ui';
import Box from './clientBox';

export default function Client({
  image,
  url,
  name,
}) {
  return (
    <Box pad="large" alignItems="center">
      <Anchor href={url} plain>
        <Image alt={`${name} logo`} src={image} imageSize="small" />
      </Anchor>
    </Box>
  );
}
