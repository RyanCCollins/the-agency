import styled, { css } from 'styled-components';
import { Props } from './types';

function background(props: Props) {
  if (props.backgroundImage) {
    return css`
      background: ${(props: Props) => `url(${props.backgroundImage})`} center center / cover no-repeat;
    `;
  } else if (props.backgroundColor) {
    return css`
      background-color: ${(props: Props) => props.backgroundColor};
    `;
  }
}

function height(props: Props) {
  if (props.height) {
    const height = typeof props.height === 'string'
      ? props.height
      : `${props.height}px`;
    return css`
      height: ${height};
    `;
  }
  return css`
    height: 350px;
  `;
}

export default styled.div`
  height: ${(props: Props) => props.full ? '100vh' : 'inherit'};
  text-align: center;
  width: 100%;
  ${(props) => background(props)}
  ${(props) => height(props)}
`;
