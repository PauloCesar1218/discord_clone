import React from 'react';

import { Container, Separator } from './styles';
import ServerButton from '../ServerButton/index';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton />
      <Separator></Separator>
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
    </Container>
  );
}

export default ServerList;