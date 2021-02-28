import styled from 'styled-components';
import { theme } from '@style';

export const Button = styled.button`
  position: relative;
  display: block;
  padding: 10px 15px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  background-color: ${theme.primaryColorLight};
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #4c4b4b;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1pt #000;
  }
`