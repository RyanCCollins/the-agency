import { css } from 'styled-components';
import { Props } from './hr'; 

export default function styles({ color }: Props) {
  return css`
    background-color: ${color};
    width: 100px;
    height: 3px;
    display: block;
    margin: 35px 0;
    margin-right: auto;
    margin-left: auto;
  `;
}
