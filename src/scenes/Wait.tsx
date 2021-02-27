import React from 'react';
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

function Wait () {
  return (
    <div className='scene'>
      <MainBox>
        <UserList
          showRank={false}
          handleAction={() => console.log('Action')}
          users={users}
        />
        <ShareInviteLink token='12' />
      </MainBox>
    </div>
  )
}

export default Wait;