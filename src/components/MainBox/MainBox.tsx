import React from 'react';
import * as style from './MainBox.styles'

type MainBoxProps = {
  children: any
};

const MainBox : React.FC<MainBoxProps> = ({
  children
}) => {
  return (
    <style.MainBox>
      {children}
    </style.MainBox>
  )
};

export default MainBox;