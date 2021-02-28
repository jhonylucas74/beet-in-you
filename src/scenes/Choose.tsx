import React from 'react';
import BoxWrapper, { Description } from '@components/BoxWrapper';
import Button from '@components/Button';

function Choose () {

  const handleCreate = () => {

  };

  return (
    <div className='scene'>
      <BoxWrapper>
        <h3>Ataque na colmeia 🐝</h3>
        <Description>Experimentar dramaticamente recursos de espontaneidade, manejo de relações, concatenação de informações em narrativas coerentes, busca por argumentos relevantes, avaliação crítica das fontes.</Description>
        <Button onClick={handleCreate}>Criar sala</Button>
      </BoxWrapper>
    </div>
  )
}

export default Choose;