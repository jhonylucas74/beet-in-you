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
  onChange: Function,
  error?: error
};

const Input : React.FC<InputProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error = { isInvalid: false }
}) => {
  return (
    <style.Wrapper>
      {label && <style.Label data-testid='label'>{label}</style.Label>}
      <style.Input
        aria-invalid={error.isInvalid}
        placeholder={placeholder}
        type={type}
        value={value}
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