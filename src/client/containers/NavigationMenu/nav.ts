import styled, { css } from 'styled-components';
import { StateProps } from './types';

function navStyles({ isVisible }: StateProps) {
  const visibility = isVisible ? 'visibile' : 'hidden';
  const opacity = isVisible ? 1.0 : 0.0;
  return css`
    visibility: ${visibility};
    opacity: ${opacity};
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
  cursor: pointer;
  right: 0;
  top: 0;
  will-change: opacity, visibility;
  transition: opacity 200ms cubic-bezier(.55,.055,.675,.19),visibility 200ms cubic-bezier(.55,.055,.675,.19);
  z-index: 1000;
`;
