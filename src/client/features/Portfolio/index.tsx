import * as React from 'react';
import { withTheme } from 'styled-components';
import Presentation from './presentation';
import { ThemeColorMap } from '../../types';
import withGraphql from './withGraphql';

interface State {
  isMounted: boolean,
}

export interface Project {
  title: string;
  image: string;
}

export interface Props {
  theme: ThemeColorMap;
  projects: Project[];
  loading: boolean;
  error: string;
}

class Portfolio extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      isMounted: false,
    };
  }
  public componentDidMount() {
    setTimeout(() => {
      this.setState({
        isMounted: true,
      });
    }, 1000);
  }
  public render() {
    return (
      <Presentation {...this.state} {...this.props} />
    );
  }
}

export default withTheme(withGraphql(Portfolio));
