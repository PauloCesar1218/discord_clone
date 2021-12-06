import styled from 'styled-components';
import { AddCircle } from 'styled-icons/ionicons-solid';
export const Container = styled.div`
  grid-area: CD;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-height: calc(100vh - 46px);

  background-color: var(--primary);
`;

export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

export const Messages = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  margin-right: 5px;
  margin-top: 4px;
  padding: 0 20px;

  ::-webkit-scrollbar {
    width: 9px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
    border-radius: 10px;
  }

`;

export const InputArea = styled.form`
  height: 82px;
  padding: 0 16px;
  position: relative;
  display: flex;
`;

export const Input = styled.input`
  padding: 0 10px 0 67px;
  background-color: var(--chat-input);
  color: var(--white);
  position: relative;
  height: 44px;
  width: 100%;
  border-radius: 6px;
  font-size: 16px;

  ::placeholder {
    color: var(--gray);
  }
`;

export const MessagesChunk = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const MessagesChunkDate = styled.div`
  color: var(--gray);
  font-size: 12px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-weight: 500;
  opacity: 0.8;
  width: 100%;

  ::after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: var(--gray);
    margin-left: 8px;
    opacity: 0.2;
  }

  ::before {
    content: '';
    width: 100%;
    height: 1px;
    background-color: var(--gray);
    margin-right: 8px;
    opacity: 0.2;
  }

`;

export const MessageInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  p {
    color: var(--white);
    font-weight: 500;
    margin-right: 10px;
  }

  span {
    color: var(--text-muted);
    font-size: 12px;
    position: relative;
    top: 4px;
  }

  div {
    display: flex;
  }
`;

export const MessageContent = styled.text`
  color: var(--message-content);
  margin: 0;
  font-weight: normal;
`;

export const AddCircleIcon = styled(AddCircle)`
  width: 25px;
  height: 25px;
  color: var(--white);
  opacity: 0.7;
  position: absolute;
  margin: 10px 16px;
`; 

export const EmojiContainer = styled.div`
  font-size: 22px;
  position: absolute;
  top: 6px;
  right: 25px;
  filter: grayscale(100%);
  cursor: pointer;
  transition: filter .2s;

  :hover {
    transform: scale(1.2);
    filter: grayscale(0%);
  }
`;

export const EmojiPickerContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 100px;
`;
