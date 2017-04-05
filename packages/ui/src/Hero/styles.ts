import styled from 'styled-components';
import { Props } from './types';

export default styled.div`
  background: ${(props: Props) => props.backgroundColor};
  min-height: 350px;
  height: ${(props: Props) => props.full ? '100vh' : '350px'};
  padding: 50px 0;
  text-align: center;
  width: 100%;
`;
