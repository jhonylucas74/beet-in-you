import React from 'react';
import BoxWrapper, { Description } from '@components/BoxWrapper';
import Button from '@components/Button';

type ChooseProps = {
  handleCreate: Function
}

const Choose: React.FC<ChooseProps> = ({ handleCreate }) => {
  return (
    <div className='scene'>
      <BoxWrapper>
        <h3><b>Bee't</b> in you! 🐝</h3>
        <Description>Um jogo sobre apostas bebidas e abelhas.</Description>
        <Button onClick={() => handleCreate()}>Criar sala</Button>
      </BoxWrapper>
    </div>
  )
}

export default Choose;