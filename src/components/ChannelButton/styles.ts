import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 3px;
  border-radius: 5px;
  background-color: transparent;
  transition: background-color .2s;
  margin-bottom: 5px;

  &:hover,
  & .active {
    background-color: var(--quinary);
    margin: 0;

    div span {
      color: var(--white);
    }

    svg {
      display: inline;
    }
  }

  svg {
    display: none;
  }

  div {
    display: flex;
    align-items: center;
    span {
      color: var(--senary);
    }
  }
`;

export const HashtagIcon = styled(Hashtag)`
  height: 24px;
  width: 24px;
  color: var(--symbol);
  margin-right: 5px;
  transition: color .2s;

  :hover {
    color: var(--white);
  }
`;

export const PersonAddIcon = styled(PersonAdd)`
  height: 16px;
  width: 16px;
  color: var(--symbol);
  transition: color .2s;

  :hover {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(Settings)`
  height: 16px;
  width: 16px;
  color: var(--symbol);
  margin-left: 6px;
  transition: color .2s;

  :hover {
    color: var(--white);
  }
`;