import styled, { css } from 'styled-components';
import { StateProps } from './types';

function navStyles({ isVisible }: StateProps) {
  if (isVisible) {
    return css`
      visibility: visible;
      opacity: 1;
    `;
  }
  return css`
    visibility: hidden;
    opacity: 0;
  `;
}

export default styled.nav`
  ${(props: StateProps) => navStyles(props)}
  background-color: #121212;
  bottom: 0;
  left: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 200ms cubic-bezier(.55,.055,.675,.19),visibility 200ms cubic-bezier(.55,.055,.675,.19);
  z-index: 1000;
`;
