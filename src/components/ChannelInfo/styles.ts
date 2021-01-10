import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';


export const Container = styled.div`
  grid-area: CI;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  background-color: var(--primary);
  padding: 0 17px;
`;

export const HashtagIcon = styled(Hashtag)`
  height: 24px;
  width: 24px;

  color: var(--symbol);
`;

export const Title = styled.h1`
  margin-left: 9px;
  font-size: 16px;
  font-weight: bold;
  color: var(--white);
`;

export const Separator = styled.div`
  height: 24px;
  width: 1px;
  margin: 0 13px;
  background-color: var(--white);
  opacity: 0.2;
`;

export const Description = styled.span`
  font-size: 15px;
  color: var(--gray);
  margin-top: 1px;
`;
