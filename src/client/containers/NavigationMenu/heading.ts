import styled, { css } from 'styled-components';
import { StateProps } from './types';
import { Heading } from 'ui';

function styles({ isVisible }: StateProps) {
  if (isVisible) {
    return css`
      transform: translateY(0%);
      opacity: 1.0;
    `;
  }
  return css`
    transform: translateY(100%);
    opacity: 0.0;
  `;
}

function transition(props: StateProps) {
  const duration = 600;
  return css`
    transition: transform ${duration}ms ease, opacity ${duration}ms ease;
  `;
}

export default styled(Heading)`
  ${(props: StateProps) => styles(props)}
  ${(props: StateProps) => transition(props)}
  will-change: transform, opacity;
`;
