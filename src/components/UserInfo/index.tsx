import React from 'react';

import { Container, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettingsIcon } from './styles';

const UserInfo: React.FC = () => {
  return <Container>
    <div>
      <Avatar />
      <UserData>
        <strong>Paulo Cesar</strong>
        <span>#2689</span>
      </UserData>
    </div>
    <Icons>
      <MicIcon />
      <HeadphoneIcon />
      <SettingsIcon />
    </Icons>
  </Container>
}

export default UserInfo;