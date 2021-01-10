import React from 'react';

import { Container, Role, Avatar, UserContainer, UserName } from './styles';

const User: React.FC = () => {
  return (
    <UserContainer>
      <Avatar />
      <UserName>Paulo Cesar</UserName>
    </UserContainer>
  )
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Online—1</Role>
      <User />
      <Role>ofiline—5</Role>
      <User />
      <User />
      <User />
      <User />
      <User />
    </Container>
  )
}

export default UserList;
