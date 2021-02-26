import React from 'react';
import { Box } from './BoxWrapper.styles'

type BoxWrapperProps = {
  children: any
};

const BoxWrapper : React.FC<BoxWrapperProps> = ({ children }) => {
  return (
    <Box>{children}</Box>
  )
};

export default BoxWrapper;