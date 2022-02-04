import React, { useEffect, useState } from "react";
import { Container, Button } from "./styles";
import NotificationPin from "../NotificationPin";
import { IServerButton } from "../../models/server.interface";
import { useParams } from "react-router-dom";

type IHomeParams = {
  channel: string;
};
const ServerButton = ({
  serverName,
  serverImage,
  id,
  notifications,
  children,
  onClick
}: IServerButton) => {
  const { channel } = useParams<IHomeParams>();
  const [selectedServer, setSelectedServer] = useState(false)

  useEffect(() => {
    if (channel && id) {
      setSelectedServer(channel === id)
    }
  }, [channel, id])

  return (
    <Container aria-selected={selectedServer} onClick={() => onClick(id)}>
      <div className="indicator" ></div>
      <Button aria-selected={selectedServer} color={children ? "#16a642" : ""}>
        {serverImage ? <img src={serverImage} alt={serverName}/> : children || serverName}
      </Button>
      <div className="notificationPosition">
        <NotificationPin notificationCounter={notifications} />
      </div>
    </Container>
  );
};

export default ServerButton;
