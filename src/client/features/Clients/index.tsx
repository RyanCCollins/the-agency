import * as React from 'react';
import Presentation from './presentation';
export interface Props {

}
class Clients extends React.Component<Props, undefined> {
  public render() {
    return (
      <Presentation {...this.props} />
    );
  }
}

export default Clients;
