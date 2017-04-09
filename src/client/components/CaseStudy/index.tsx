import * as React from 'react';
import { Box, Image } from 'ui';
import Overlay from './overlay';

export interface Props extends React.HTMLProps<typeof CaseStudy> {
  image: string;
  title: string;
}
export default function CaseStudy({
  image,
  title,
}: Props): JSX.Element {
  return (
    <Box pad="large">
      <div style={{ position: 'relative' }}>
        <Overlay>
          <p>{title}</p>
        </Overlay>
        <Image imageSize="large" src={image} alt={title} />
      </div>
    </Box>
  );
};
