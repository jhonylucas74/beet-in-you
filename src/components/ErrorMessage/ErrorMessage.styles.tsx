import styled from 'styled-components';
import { theme } from '@style';

export const Message = styled.p`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 10px;
  border-radius: 4px;
  color: ${theme.errorColor};
  background-color: ${theme.errorColorLight};
  margin: 10px 0 0 0;
`;
