import * as React from 'react';
import Animation from './animation';
import { AnimationType } from './types';

export interface Props {
  type?: AnimationType;
  isVisible: boolean;
  children?: JSX.Element;
  duration?: number;
}

type HOC = (props: Props) => JSX.Element;
const WithAnimation: HOC = ({
  duration = 500,
  type = 'fadeIn',
  children,
  ...props,
}) => (
  <Animation type={type} duration={duration} {...props}>
    {children}
  </Animation>
);

export default WithAnimation;
