import React, { useState } from 'react';
import MainBox from '@components/MainBox';
import UserList from '@components/UserList';
import ShareInviteLink from '@components/ShareInviteLink';

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

function Play () {
  const [isPlaying, setPlaying] = useState(false);

  return (
    <div className='scene'>
      <MainBox>
        <UserList
          showRank={isPlaying}
          handleAction={() => setPlaying(true)}
          users={users}
        />
        <ShareInviteLink show={!isPlaying} token='12' />
      </MainBox>
    </div>
  )
}

export default Play;