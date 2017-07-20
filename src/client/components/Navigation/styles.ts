import styled, { css } from 'styled-components';
import { Header } from 'ui';
import { Props } from './types';

interface OwnProps extends Props {
  isDocked: boolean;
}

export function styles(props: OwnProps) {
  let color = props.isDocked ? '#666' : '#ffffff';
  return css`
    h3 {
      color: ${color};
      opacity: 0.8;
      transition: opacity 200ms cubic-bezier(.55,.055,.675,.19);
      &:hover {
        ppacity: 1.0;
      }
    }
  `;
}

export default styled(Header)`
  ${(props: OwnProps) => styles(props)}
`;