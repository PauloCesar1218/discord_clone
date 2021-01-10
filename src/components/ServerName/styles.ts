import styled from 'styled-components';
import { ExpandMore } from 'styled-icons/material';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 11px 0px 16px;
  background-color: var(--secondary);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: var(--white);
`;

export const ExpandIcon = styled(ExpandMore)`
  color: var(--white);
  width: 28px;
  height: 28px;
`;