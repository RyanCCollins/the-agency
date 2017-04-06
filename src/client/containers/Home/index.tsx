import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { State as GlobalState } from 'root/state';
import { Action, ActionMap, ErrorType } from './types';
import actionCreators from './actionCreators';
import * as selectors from './selectors';
import Presentation from './presentation';

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
  section1: boolean;
  section2: boolean;
}

export interface DispatchProps {
  actions: ActionMap;
}

export interface StateProps {
  isLoading: boolean;
  error?: ErrorType;
  data?: string;
}

export type Props = StateProps & DispatchProps;

class Home extends React.Component<Props, State> {
  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      section1: false,
      section2: false,
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
    const windowHeight = window ? window.innerHeight : 1000;
    const section1Node = document.getElementById('section-one');
    const section2Node = document.getElementById('section-two');
    const section1 = section1Node.getBoundingClientRect().top < windowHeight / 2;
    const section2 = section2Node.getBoundingClientRect().top < windowHeight / 2;
    this.setState({
      section1,
      section2,
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
)(Home);
