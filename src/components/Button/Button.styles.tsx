import styled from 'styled-components';
import { theme } from '@style';

export const Button = styled.button`
  padding: 15px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  min-width: 200px;
  text-transform: uppercase;
  background-color: ${theme.primaryColor};
  outline-color: ${theme.primaryColorDark};
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: ${theme.primaryColorDark};
  }
`;