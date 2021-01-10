import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 8px;

  ::before {
    background-color: var(--white);
    border-radius: 100%;
    position: absolute;
    left: -4px;
    width: 8px;
    height: 8px;
    content: '';
  }

`;

export const Button = styled.button`
  height: 100%;
  width: 48px;
  background-color: var(--rocketseat);
  border-radius: 100%;
  position: relative;

  ::after {
    border: 3px solid var(--tertiary);
    background-color: var(--notification);
    border-radius: 100%;
    position: absolute;
    bottom: -4px;
    right: -4px;
    width: 16px;
    height: 16px;
    color: var(--white);
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    content: '3';
  }
`;