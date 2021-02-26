import React, { useState } from 'react';
import BoxWrapper from '@components/BoxWrapper';
import Input from '@components/Input'
import Button from '@components/Button';

function Join () {
  const [name, setName] = useState('')

  return (
    <div className='scene'>
      <BoxWrapper>
        <h3>Entrar no jogo</h3>
        <Input
          placeholder='Digite seu nome'
          value={name}
          onChange={setName}
        />
        <Button>Participar</Button>
      </BoxWrapper>
    </div>
  )
}

export default Join;