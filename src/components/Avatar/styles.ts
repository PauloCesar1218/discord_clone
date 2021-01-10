import styled from 'styled-components';

export const AvatarContainer = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 18px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--gray);

  /* ::after {
    border: 3px solid var(--quaternary);
    background-color: var(--online);
    border-radius: 50%;
    position: absolute;
    bottom: -4px;
    right: -4px;
    width: 10px;
    height: 10px;
    content: '';
  } */

  svg {
    width: 32px;
    height: 32px;
    fill: var(--white);
  }

`;