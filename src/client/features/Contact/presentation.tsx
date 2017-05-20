import * as React from 'react';
import { Section, Box } from 'ui';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import { Props } from './types';

export default function ContactPresentation(props: Props) {
  return (
    <Section alignItems="center" justifyContent="center">
      <Box boxSize="large"> 
        <Form style={{ width: '100%' }}>
          <legend>Contact</legend>
          <Input label="Name" floatingLabel={true} />
          <Input label="Email" floatingLabel={true} />
          <Textarea label="Message" floatingLabel={true} />
          <Button variant="raised">Submit</Button>
        </Form>
      </Box>
    </Section>
  );
}
