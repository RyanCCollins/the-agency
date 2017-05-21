import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { State as GlobalState } from 'root/state';
import { withTheme } from 'styled-components';
import { Action, ActionMap, ErrorType, Section } from './types';
import actionCreators from './actionCreators';
import * as selectors from './selectors';
import HomePresentation from './presentation';
import sectionIsVisible from './sectionIsVisible';
import { ThemeColorMap } from '../../types';

type MapStateToProps = (state: GlobalState) => StateProps;
const mapStateToProps: MapStateToProps = (state) => ({
  isLoading: selectors.selectIsLoading(state),
  error: selectors.selectError(state),
  data: selectors.selectData(state),
  sections: selectors.selectSections(state),
});

type MapDispatchToProps = (dispatch: Dispatch<Action>) => DispatchProps;
const mapDispatchToProps: MapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    actionCreators,
    dispatch,
  ),
});

interface State {
  sections: boolean[];
}

export interface DispatchProps {
  actions: ActionMap;
}

export interface StateProps {
  isLoading: boolean;
  sections: Section[];
  error?: ErrorType;
  data?: string;
}

interface OwnProps {
  theme: ThemeColorMap;
}

export type Props = StateProps & DispatchProps & OwnProps;

class Home extends React.Component<Props, State> {
  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
  }
  public componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.handleScroll);
    }
  }
  public componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
  private handleScroll() {
    const { sections } = this.props;
    sections.forEach((_, i) => {
      this.props.actions.toggleSection(i, sectionIsVisible(`section${i}`));
    });
  }
  public render() {
    return (
      <HomePresentation
        {...this.props}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTheme(Home));
