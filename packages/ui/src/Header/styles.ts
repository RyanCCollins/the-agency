import { css } from 'styled-components';
import { HeaderComponentProps, Props } from './types';

function translateStyle({ state }: HeaderComponentProps) {
  const translate = state === 'Pinned' ? 0 : -88;
  return css`
    transform: translate3d(0px, ${translate}px, 0px);
  `;
}

export default function headerStyles() {
  return css`
    ${(props: Props) => translateStyle(props)}
    padding: 30px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 8;
    width: 100%;
    transition: opacity 400ms ease, transform 400ms ease, background-color 600ms ease
    background-color: ${(props: Props) => props.backgroundColor || 'rgba(245,245,245,.95)'};
  `;
}
