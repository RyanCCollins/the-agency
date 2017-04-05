import styled from 'styled-components';
import { Props } from './types';

export default styled.div`
  background: ${(props: Props) => props.backgroundColor};
  min-height: 350px;
  height: ${(props: Props) => props.full ? '100vh' : 'inherit'};
  text-align: center;
  width: 100%;
`;
