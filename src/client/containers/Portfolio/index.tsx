import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { State as GlobalState } from 'root/state';
import { withTheme } from 'styled-components';
import { Action, ActionMap, ErrorType, Data } from './types';
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

export interface DispatchProps {
  actions: ActionMap;
}

export interface StateProps {
  isLoading: boolean;
  error?: ErrorType;
  data?: Data;
}

interface State {
  isMounted: boolean,
}

interface OwnProps { theme: ThemeColorMap; isMounted: boolean; }
export type Props = StateProps & DispatchProps & OwnProps;

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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTheme(Portfolio));
