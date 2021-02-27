import styled from 'styled-components';
import { theme } from '@style';

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  h4 {
    margin: 0 10px;
    font-weight: 600;
    font-size: 24px;
    text-align: center;
  }

  p {
    text-align: center;
    color: hsla(0deg 0% 0% / 60%);
    padding: 0 20px;

    b {
      font-weight: 600;
    }
  }
`
export const Button = styled.button`
  position: relative;
  display: block;
  margin: 0 auto;
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