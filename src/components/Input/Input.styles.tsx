import styled from 'styled-components';
import { theme } from '@style';

export const Input = styled.input`
  padding: 14px;
  font-size: 20px;
  font-weight: 400;
  border: 1px solid hsl(49deg 43% 50%);;
  border-radius: 6px;
  background-color: hsl(49deg 43% 90%);
  outline-color: ${theme.primaryColorDark};
  color: hsl(49deg 43% 30%);
  margin: 20px 0;
`;

export const Label = styled.label`
  font-size: 20px;
  margin: 10px 0;
  color: hsla(0deg 0% 0% / 70%);
`;
