import React from 'react';

import { Container, HashtagIcon, PersonAddIcon, SettingsIcon } from './styles';

const ChannelButton: React.FC = () => {
  return <Container>
    <div>
      <HashtagIcon />
      <span>chat-livre</span>
    </div>
    <div>
      <PersonAddIcon />
      <SettingsIcon />
    </div>
  </Container>;
}

export default ChannelButton;