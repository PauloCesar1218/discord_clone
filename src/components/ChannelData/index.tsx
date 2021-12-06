import React, { useState, useEffect } from 'react';
import Picker, {IEmojiData} from 'emoji-picker-react';
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
  EmojiContainer,
  EmojiPickerContainer
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
interface IEmoji {
  showEmojiPicker(): void;
}
const EmojisButton = ({showEmojiPicker}: IEmoji) => {
  const [currentEmoji, setCurrentEmoji] = useState<number>(0);
  const emojisArray = ['😀', '😄', '😅', '😂', '🤣', '😉', '😇', '🥰', '😍', '🤩', '😘', '😝', '🤑', '🤔', '🤫', '😏', '😒', '🙄', '😬', '😪', '🤢', '🤓', '😎', '😤', '😈'];


  function onMouseEnterHandler() {
    setCurrentEmoji(Math.round(Math.random() * 24));
  }

  return (
    <EmojiContainer onMouseEnter={onMouseEnterHandler} onClick={showEmojiPicker}>
      {emojisArray[currentEmoji]}
    </EmojiContainer>
  );
}

const ChannelData: React.FC = () => {
  const [chosenEmoji, setChosenEmoji] = useState<IEmojiData>({} as IEmojiData);
  const [emojiPicker, setEmojiPicker] = useState<boolean>(false);
  const [message, setMessage] = useState('')

  useEffect(() => {
    if(chosenEmoji.emoji) {
      setMessage((currentValue) => {
        currentValue += chosenEmoji.emoji
        return currentValue
      })
    }
  }, [chosenEmoji])

  function onEmojiClick(event: React.MouseEvent, emojiObject: IEmojiData) {
    setChosenEmoji(emojiObject);
  }

  function showEmojiPicker() {
    setEmojiPicker(!emojiPicker)
  }
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
      <Input placeholder="Message #geral" value={message} onInput={(event: any) => {
        setMessage(event.target.value)
      }} />
      <AddCircleIcon />
      <EmojisButton showEmojiPicker={showEmojiPicker}/>
      {
        emojiPicker ?
        <EmojiPickerContainer>
          <Picker onEmojiClick={onEmojiClick} pickerStyle={{backgroundColor: '#2f3136', boxShadow: 'none', border: 'none'}} groupVisibility={{
            animals_nature: false,
            food_drink: false,
            travel_places: false,
            activities: false,
            objects: false,
            symbols: false,
            flags: false,
          }} disableSearchBar={true}/>
        </EmojiPickerContainer>
        :
        <></>
      }
    </InputArea>
  </Container>;
}

export default ChannelData;