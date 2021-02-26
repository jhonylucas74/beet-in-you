import React from 'react';
import * as style from './ErrorMessage.styles'

type ErrorMessageProps = {
  message?: string,
  show: boolean
};

const Input : React.FC<ErrorMessageProps> = ({
  message,
  show
}) => {
  if (!show || message === '') return null;

  return (
    <>
      <style.Message>
        {message}
      </style.Message>
    </>
  )
};

export default Input;