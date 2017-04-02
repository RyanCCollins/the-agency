import * as React from 'react';
import { StateProps } from './types';
import Wrapper from './styles';

export default class Presentation extends React.Component<StateProps, undefined> {
  public render() {
    // const {
    //   isLoading,
    //   error,
    //   data,
    // } = this.props;
    return (
      <Wrapper>
        Hello world
      </Wrapper>
    );
  }
}
