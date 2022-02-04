import React from "react";

import { Container, Separator, AddIcon } from "./styles";
import ServerButton from "../ServerButton/index";
import { ServerListData } from "../../mock/servers";
import { useHistory } from "react-router-dom";
import Avatar from './../../assets/images/avatar.png'

const ServerList: React.FC = () => {
  const history = useHistory();

  function openChannel(id?: string) {
    history.push(`/home/${id}`)
  }

  return (
    <Container>
      <ServerButton serverName="PJ" id={'@me'} notifications={0} onClick={() => history.push('/home/@me')}/>
      <Separator></Separator>
      {ServerListData.map((x) => (
        <ServerButton
          serverName={x.serverName}
          serverImage={x.serverImage}
          id={x.id}
          notifications={x.notifications}
          onClick={openChannel}
          key={x.id}
        />
      ))}
      <ServerButton serverName='+' notifications={0} onClick={() => console.log('add server')}>
        <AddIcon/>
      </ServerButton>
    </Container>
  );
};

export default ServerList;
