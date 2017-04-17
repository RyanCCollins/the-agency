import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { State as GlobalState } from 'root/state';
import { withTheme } from 'styled-components';
import { Action, ActionMap, ErrorType } from './types';
import actionCreators from './actionCreators';
import * as selectors from './selectors';
import Presentation from './presentation';
import { ThemeColorMap } from '../../types';

type MapStateToProps = (state: GlobalState) => StateProps;
const mapStateToProps: MapStateToProps = (state) => ({
  isLoading: selectors.selectIsLoading(state),
  error: selectors.selectError(state),
  data: selectors.selectData(state),
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
  error?: ErrorType;
  data?: string;
}

interface OwnProps {
  theme: ThemeColorMap;
}

export type Props = StateProps & DispatchProps & OwnProps;

function sectionIsVisible(id) {
  const windowHeight = window ? window.innerHeight : 1000;
  const node = document.getElementById(id);
  return node.getBoundingClientRect().top < windowHeight / 2;
}

class Home extends React.Component<Props, State> {
  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      sections: [
        false,
        false,
        false,
      ],
    };
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
    this.setState({
      sections: [
        sectionIsVisible('section-one'),
        sectionIsVisible('section-two'),
        sectionIsVisible('section-three'),
      ],
    });
  }
  public render() {
    return (
      <Presentation
        {...this.state}
        {...this.props}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTheme(Home));
