import styled from 'styled-components';
import styles from './styles'; 

export interface Props {
  color: string;
}

export default styled.div`
  ${(props: Props) => styles(props)}
`;
