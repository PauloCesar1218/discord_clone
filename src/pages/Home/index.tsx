import React from 'react';

import { Grid }    from './styles';
import ServerList  from '../../components/ServerList/index';
import ServerName  from '../../components/ServerName/index';
import ChannelInfo from '../../components/ChannelInfo/index';
import ChannelList from '../../components/ChannelList/index';
import UserInfo    from '../../components/UserInfo/index';
import UserList    from '../../components/UserList/index';
import ChannelData from '../../components/ChannelData/index'

const Home: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
      <UserInfo />
      <UserList />
      <ChannelData />
    </Grid>
  );
}

export default Home;