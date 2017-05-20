import * as React from 'react';
import { Box, Headline } from 'ui';
import Hr from './hr';

export interface Props extends React.HTMLProps<typeof PageIntro> {
  title: string;
}
export default function PageIntro({
  title,
}: Props): JSX.Element {
  return (
    <Box pad="large" alignItems="center">
      <Headline color="#666" fontWeight={700}>{title}</Headline>
      <Hr color="#666" />
    </Box>
  );
};
