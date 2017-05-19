import * as React from 'react';
import { Props } from './types';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';

export default class Presentation extends React.Component<Props, undefined> {
  public render() {
    return (
      <Form>
        <legend>Title</legend>
        <Input label="Input 1" floatingLabel={true} />
        <Input label="Input 2" floatingLabel={true} defaultValue="Value on load" />
        <Textarea label="Textarea" floatingLabel={true} defaultValue="Value on load" />
        <Button variant="raised">Submit</Button>
      </Form>
    );
  }
}
