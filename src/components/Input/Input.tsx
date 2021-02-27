import React from 'react';
import ErrorMessage from '@components/ErrorMessage'
import * as style from './Input.styles'

type error = {
  message?: string,
  isInvalid: boolean
}

type InputProps = {
  type?: string,
  label?: string,
  placeholder?: string
  value: any
  error?: error
  onChange: Function,
  onEnter?: Function 
};

const Input : React.FC<InputProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  error = { isInvalid: false },
  onChange,
  onEnter
}) => {

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter' && onEnter) onEnter();
  }

  return (
    <style.Wrapper>
      {label && <style.Label data-testid='label'>{label}</style.Label>}
      <style.Input
        aria-invalid={error.isInvalid}
        placeholder={placeholder}
        type={type}
        value={value}
        onKeyPress={handleKeyPress}
        onChange={(e: any) => onChange(e.target.value)}
      />
      <ErrorMessage
        show={error.isInvalid}
        message={error.message}
      />
    </style.Wrapper>
  )
};

export default Input;