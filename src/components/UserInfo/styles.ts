import styled from 'styled-components';
import { Settings, Mic, Headset } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: UI;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px;
  background-color: var(--quaternary);
  
  div {
    display: flex;
  }
`;

export const Avatar = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  margin-right: 8px;
  position: relative;

  background-color: var(--gray);

  ::after {
    border: 3px solid var(--quaternary);
    background-color: var(--online);
    border-radius: 50%;
    position: absolute;
    bottom: -4px;
    right: -4px;
    width: 10px;
    height: 10px;
    content: '';
  }

`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13px;

  strong {
    color: var(--white);
  }

  span {
    color: var(--gray);
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg:not(:first-child) {
    margin-left: 7px;
  }
  
  svg {
    color: var(--gray);
    width: 20px;
    height: 20px;
    opacity: .7;
    cursor: pointer;
    transition: opacity .2s;

    :hover {
      opacity: 1;
    }
  }
`;

export const MicIcon = styled(Mic)``;

export const HeadphoneIcon = styled(Headset)``;

export const SettingsIcon = styled(Settings)``;
