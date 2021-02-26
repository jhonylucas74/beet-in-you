import React from 'react';
import { Divider } from './ButtonsDivider.styles'

type ButtonsDividerProps = {
  children: any
};

const ButtonsDivider : React.FC<ButtonsDividerProps> = ({ children }) => {
  return (
    <Divider>{children}</Divider>
  )
};

export default ButtonsDivider;