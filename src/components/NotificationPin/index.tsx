import React from "react";
import { NotificationPinContainer } from "./styles";

interface INotificationPin {
  notificationCounter: number;
}
const NotificationPin = ({ notificationCounter }: INotificationPin) => {
  return (
    <>
      {notificationCounter > 0 ? (
        <NotificationPinContainer>
          {notificationCounter}
        </NotificationPinContainer>
      ) : (
        <></>
      )}
    </>
  );
};

export default NotificationPin;
