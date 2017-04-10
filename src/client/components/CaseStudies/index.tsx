import * as React from 'react';
import { Box } from 'ui';
import { CaseStudy } from 'components';
import { Project } from 'features/Portfolio/types';

export interface Props extends React.HTMLProps<typeof CaseStudies> {
  items: Project[];
  isMounted: boolean;
}
export default function CaseStudies({
  items,
  isMounted,
}: Props): JSX.Element {
  return (
    <Box flexDirection="column">
      {items.map((item, i) =>
        <CaseStudy key={i} {...item} />,
      )}
    </Box>
  );
};