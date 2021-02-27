import styled from 'styled-components';
import { theme } from '@style';

export const WaitBox = styled.div`
  position: relative;
  width: 80%;
  max-width: 800px;
  border-radius: 8px;
  height: 450px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  box-shadow: 0 5px 5px hsla(0deg 0% 0% / 10%);
`;

export const Side = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid hsla(0deg 0% 0% / 10%);

  h5 {
    font-size: 18px;
    font-weight: 500;
    padding: 10px 20px;
    margin: 0;
  }

  button {
    margin: 10px auto 20px auto;
    background-color: hsl(127deg 46% 89%);
  }
`

export const Users = styled.ul`
  flex: 1;
  padding: 0 10px 0 20px;
  margin: 0;
  list-style: none;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 6px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: hsla(0deg 0% 0% / 5%);
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: hsla(0deg 0% 0% / 20%);
  }
`

export const User = styled.li`
  font-size: 18px;
  padding: 5px 0;
  color: hsla(0deg 0% 0% / 60%);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  b {
    font-weight: 600;
    color: #d8b64e;
  }

  span {
    background-color: #f4f4f4;
    color: #a5a5a5;
    font-weight: 600;
    margin-right: 5px;
    padding: 2px 3px;
    border-radius: 3px;
  }
`

export const Config = styled.div`
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
// hsl(247deg 75% 91%)