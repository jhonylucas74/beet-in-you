import React from 'react';
import WaitBox from '@components/WaitBox'

const users = [
  { username: 'Fulano' },
  { username: 'Ciclano' },
  { username: 'Guilerme da silva' },
  { username: 'Mano mano' },
  { username: 'Fulano' },
  { username: 'Ciclano' },
  { username: 'Fulano' },
  { username: 'Ciclano' },
  { username: 'Guilerme da silva' },
  { username: 'Mano mano' },
  { username: 'Fulano' },
  { username: 'Ciclano' },
  { username: 'Fulano' },
  { username: 'Ciclano' },
  { username: 'Guilerme da silva' },
  { username: 'Mano mano' },
  { username: 'Fulano' },
  { username: 'Ciclano' }
]

function Wait () {
  return (
    <div className='scene'>
      <WaitBox
        users={users}
      />
    </div>
  )
}

export default Wait;