import * as React from 'react';
import Component from './styles';

export interface Props extends React.HTMLProps<typeof Menu> {
  children: JSX.Element;
}
export default function Menu({
  children,
}: Props): JSX.Element {
  return (
    <Component>
      {children}
    </Component>
  );
};
