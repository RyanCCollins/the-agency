import * as React from 'react';
import { compose } from 'redux';
import { withTheme } from 'styled-components';
import Presentation from './presentation';
import withGraphql from './withGraphql';
import { PortfolioTypes } from '../../types';
import { ThemeColorMap } from '../../types';

export interface Props {
  project: PortfolioTypes.Project;
  loading: boolean;
  error: string;
  refetch: () => void;
  theme: ThemeColorMap;
}

class Project extends React.Component<Props, undefined> {
  public render() {
    return (
      <Presentation {...this.props} />
    );
  }
}

export default compose(withTheme, withGraphql)(Project);
