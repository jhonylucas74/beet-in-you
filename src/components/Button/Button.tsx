import React from 'react';
import * as style from './Button.styles'

interface ClickFunction {
  (event: React.MouseEvent): void
};

type ButtonProps = {
  children: string,
  onClick?: ClickFunction
};

const Button : React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <style.Button onClick={onClick}>
      {children}
    </style.Button>
  )
};

export default Button;