import styled from 'styled-components';

export const Container = styled.div`
  grid-area: UL;

  display: flex;
  flex-direction: column;

  padding: 24px 6px 0 16px;
  background-color: var(--secondary);

  max-height: calc(100vh - 46px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: var(--tertiary);
  }
  
  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;


export const Role = styled.div`
  font-size: 12px;
  color: var(--gray);
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 7px;
`;

export const Avatar = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  margin-right: 13px;
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

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 6px;
  background-color: transparent;
  transition: background-color .2s;
  margin-bottom: 12px;
  padding: 5px;

  :hover,
  .active {
    background-color: var(--quinary);
  }

`;

export const UserName = styled.span`
  color: var(--white);
  opacity: 0.7;
  font-size: 15px;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
