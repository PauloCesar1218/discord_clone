import styled from 'styled-components';
import {Add} from '@styled-icons/fluentui-system-filled/Add'

export const Container = styled.div`
  grid-area: SL;
  width: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--tertiary);
  padding-top: 11px;
  max-height: 100vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Separator = styled.div`
  width: 32px;
  border-bottom: 2px solid var(--quaternary);
  margin-bottom: 8px;
`;

export const AddIcon = styled(Add)`
  color: #57F287;
  height: 20px;
  width: 20px;
`