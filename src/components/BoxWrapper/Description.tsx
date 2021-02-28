import React from 'react';
import { Text } from './BoxWrapper.styles'

type DescriptionProps = {
  children: any
};

export const Description : React.FC<DescriptionProps> = ({ children }) => {
  return (
    <Text aria-label='description'>{children}</Text>
  )
};

export default Description;