import * as React from 'react';
import Component from './styles';

export interface Props extends React.HTMLProps<typeof Hero> {
  backgroundColor?: string;
  full?: boolean;
}
export default function Hero({
  children,
  backgroundColor,
  full = false,
}: Props): JSX.Element {
  const colorProp = backgroundColor || '#2d2d2d';
  return (
    <Component full={full} backgroundColor={colorProp}>
      {children}
    </Component>
  );
};
