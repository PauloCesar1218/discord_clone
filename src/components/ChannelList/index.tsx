import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';
import ChannelButton from '../ChannelButton/index';

const ChannelList: React.FC = () => {
  return <Container>
    <Category>
      <span>Canais de texto</span>
      <AddCategoryIcon />
    </Category>

    <ChannelButton />
    <ChannelButton />
    <ChannelButton />
    <ChannelButton />
  </Container>
}

export default ChannelList;