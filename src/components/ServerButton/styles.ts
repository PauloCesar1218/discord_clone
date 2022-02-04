import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 8px;

  .indicator {
    background-color: var(--white);
    border-radius: 10px;
    position: absolute;
    left: -4px;
    width: 0px;
    height: 0px;
    display: block;
    transition: width .25s ease-out, height .25s ease-out;
  }

  .notificationPosition {
    position: absolute;
    bottom: -6px;
    right: 0px;
  }

  &:hover {
    .indicator {
      width: 8px;
      height: 20px;
    }
  }

  ::before {
    display: ${props => (props['aria-selected'] ? `flex` : `none`)};
    background-color: var(--white);
    border-radius: 10px;
    position: absolute;
    left: -4px;
    width: 8px;
    height: 38px;
    content: '';
  }

`;

export const Button = styled.button`
  height: 100%;
  width: 48px;
  background-color: ${props => (props['aria-selected'] ? `var(--discord-experiment)` : `var(--primary)`)};
  background-size: cover;
  color: var(--white);
  font-size: 14px;
  border-radius: ${props => (props['aria-selected'] ? `16px` : `100%`)};
  position: relative;
  transition: border-radius .25s ease-out, background-color .25s ease-out;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  svg {
    transition: color .25s ease-out;
  }

  &:hover {
    border-radius: 16px;
    background-color: ${props => props.color || 'var(--discord-experiment)'};
    svg {
      color: var(--white)!important;
    }
  }

  &:active {
    transform: translateY(2px);
  }

  /* ::after {
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
    display: ${props => (props['aria-hidden'] ? `none` : `flex`)};
    justify-content: center;
    align-items: center;
    content: '3';
  } */
`;