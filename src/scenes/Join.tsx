import React, { useEffect, useState } from 'react';
import BoxWrapper from '@components/BoxWrapper';
import Input from '@components/Input';
import EmojiInput from '@components/EmojiInput';
import Button from '@components/Button';
import validator from '@utils/validator';

const formValidator = validator.createForm([
  {
    name: 'name',
    validWhen: false,
    method: validator.isEmpty,
    message: 'Nome não pode está vazio.'
  }
])

function Join () {
  const [name, setName] = useState('')
  const [emoji, setEmoji] = useState('🐶')
  const [errors, setErrors] = useState(formValidator.reset())

  const handleSubmit = () => {
    const result = formValidator.validate({ name })
    setErrors(result.errors)

    if (result.isValid) {
      console.log('>>>')
    }
  }

  return (
    <div className='scene'>
      <BoxWrapper>
        <h3>Entrar no jogo</h3>
        <EmojiInput
          value={emoji}
          onChange={setEmoji}
          label='Escolhe o emoji que mais te representa.'
        >
          <Input
            placeholder='Digite seu nome'
            value={name}
            onEnter={handleSubmit}
            onChange={setName}
            error={errors.get('name')}
          />
        </EmojiInput>
        <Button onClick={handleSubmit}>Participar</Button>
      </BoxWrapper>
    </div>
  )
}

export default Join;