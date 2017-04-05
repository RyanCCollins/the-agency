import * as React from 'react';
import ButtonComponent from './styles';
import { Size } from './types';

// This is so that the onClick handler is accepted without type interferance
export interface Props extends React.HTMLProps<HTMLButtonElement & Button> {
  color?: string;
  backgroundColor?: string;
  fontSize?: Size;
  borderColor?: string;
  label?: string;
}

class Button extends React.Component<Props, undefined> {
  public static defaultProps: Props = {
    color: '#fefefe',
    backgroundColor: '#c05b4d',
    borderColor: '#732419',
    fontSize: 'medium',
  };
  public render() {
    const { children, label, ...props } = this.props;
    return (
      <ButtonComponent
        {...props}
      >
        {children || label || ''}
      </ButtonComponent>
    );
  }
}

export default Button;
