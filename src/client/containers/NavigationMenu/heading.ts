import styled, { css } from 'styled-components';
import { StateProps } from './types';
import { Heading } from 'ui';

function styles({ isVisible }: StateProps) {
  const opacity = isVisible ? 1.0 : 0.0;
  const translate = isVisible ? 0 : 100;
  return css`
    transform: translateY(${translate}%);
    opacity: ${opacity};
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
