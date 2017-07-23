import styled, { css } from 'styled-components';
import { Header, Heading as HeadingComponent } from 'ui';
import { Props } from './types';

const headingStyles = css`
  padding: 20px;
  text-shadow: 1px 1px #0a0a0a;
`;

export const Heading = styled(HeadingComponent)`${headingStyles}`;

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