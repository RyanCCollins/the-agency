import * as React from 'react';
import { CaseStudies, PageIntro } from 'components';
import { Box } from 'ui';
import { Props } from './types';

export default function Presentation({
  theme,
  projects,
}: Props) {
  return (
    <Box alignItems="center" backgroundColor={theme.offwhite}>
      <PageIntro title="Case Studies" />
      {projects && <CaseStudies items={projects} />}
    </Box>
  );
}
