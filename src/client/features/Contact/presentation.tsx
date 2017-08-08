import * as React from 'react';
import { Section, Box } from 'ui';
import { PageIntro } from 'components';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';

export default function ContactPresentation(): JSX.Element {
  return (
    <Section alignItems="center" justifyContent="center">
      <PageIntro title="Contact Me" />
      <Box boxSize="large">
        <Form style={{ width: '100%' }}>
          <Input label="Name" floatingLabel />
          <Input label="Email" floatingLabel />
          <Textarea className="no-resize" label="Message" floatingLabel />
          <Button variant="raised">Submit</Button>
        </Form>
      </Box>
    </Section>
  );
}
