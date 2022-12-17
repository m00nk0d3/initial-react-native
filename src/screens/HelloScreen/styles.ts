import styled from 'styled-components/native';
import {useSizing} from 'utils/useSizing'

const size = useSizing()
export const Container = styled.View`
  flex-grow: 1;
  height:${size.vh(100)}px;
  align-items: center;
  justify-content: center;
`;
