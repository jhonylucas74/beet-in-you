import React from 'react';
import * as style from './Input.styles'

type InputProps = {
  type?: string,
  label?: string,
  placeholder?: string
  value: any
  onChange: Function
};

const Input : React.FC<InputProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
}) => {
  return (
    <>
      {label && <style.Label data-testid='label'>{label}</style.Label>}
      <style.Input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e: any) => onChange(e.target.value)}
      />
    </>
  )
};

export default Input;