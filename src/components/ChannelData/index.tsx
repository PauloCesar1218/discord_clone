import React, { useState } from 'react';

import Avatar from '../Avatar/index';
import { 
  Container, 
  Messages, 
  MessagesChunk, 
  MessagesChunkDate, 
  MessageContainer,
  MessageInfo,
  MessageContent,
  InputArea, 
  Input,
  AddCircleIcon,
  EmojiContainer
} from './styles';

const Message: React.FC = () => {
  return (
    <MessageContainer>
      <Avatar />
      <MessageInfo>
        <div>
          <p>fellipearb</p>
          <span>08/20/20</span>
        </div>
        <MessageContent>O mic do celular tá zuado</MessageContent>
      </MessageInfo>
    </MessageContainer>
  );
}

const EmojisButton: React.FC = () => {
  const [currentEmoji, setCurrentEmoji] = useState<number>(0);
  const emojisArray = ['😀', '😄', '😅', '😂', '🤣', '😉', '😇', '🥰', '😍', '🤩', '😘', '😝', '🤑', '🤔', '🤫', '😏', '😒', '🙄', '😬', '😪', '🤢', '🤓', '😎', '😤', '😈'];


  function onMouseEnterHandler() {
    setCurrentEmoji(Math.round(Math.random() * 24));
  }

  return (
    <EmojiContainer onMouseEnter={onMouseEnterHandler}>
      {emojisArray[currentEmoji]}
    </EmojiContainer>
  );
}

const ChannelData: React.FC = () => {
  return <Container>
    <Messages>
      <MessagesChunk>
        <MessagesChunkDate>August 20, 2020</MessagesChunkDate>
        <Message />
      </MessagesChunk>
      <MessagesChunk>
        <MessagesChunkDate>August 20, 2020</MessagesChunkDate>
        <Message />
      </MessagesChunk>
      <MessagesChunk>
        <MessagesChunkDate>August 20, 2020</MessagesChunkDate>
        <Message />
      </MessagesChunk>
      <MessagesChunk>
        <MessagesChunkDate>August 20, 2020</MessagesChunkDate>
        <Message />
      </MessagesChunk>
      <MessagesChunk>
        <MessagesChunkDate>August 20, 2020</MessagesChunkDate>
        <Message />
      </MessagesChunk>
      <MessagesChunk>
        <MessagesChunkDate>August 20, 2020</MessagesChunkDate>
        <Message />
      </MessagesChunk>
      <MessagesChunk>
        <MessagesChunkDate>August 20, 2020</MessagesChunkDate>
        <Message />
      </MessagesChunk>
      <MessagesChunk>
        <MessagesChunkDate>August 20, 2020</MessagesChunkDate>
        <Message />
      </MessagesChunk>
      <MessagesChunk>
        <MessagesChunkDate>August 20, 2020</MessagesChunkDate>
        <Message />
      </MessagesChunk>
      <MessagesChunk>
        <MessagesChunkDate>August 20, 2020</MessagesChunkDate>
        <Message />
      </MessagesChunk>
      <MessagesChunk>
        <MessagesChunkDate>August 20, 2020</MessagesChunkDate>
        <Message />
      </MessagesChunk>
      <MessagesChunk>
        <MessagesChunkDate>August 20, 2020</MessagesChunkDate>
        <Message />
      </MessagesChunk>
    </Messages>
    <InputArea>
      <Input placeholder="Message #geral" />
      <AddCircleIcon />
      <EmojisButton />
    </InputArea>
  </Container>;
}

export default ChannelData;