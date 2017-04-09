import * as React from 'react';
import { Box, WithAnimation } from 'ui';
import { CaseStudy } from 'components';
import { Project } from 'containers/Portfolio/types';

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
        <WithAnimation delay={(i + 1) * 100} type="fadeInUp" isVisible={isMounted}>
          <CaseStudy {...item} />
        </WithAnimation>,
      )}
    </Box>
  );
};
