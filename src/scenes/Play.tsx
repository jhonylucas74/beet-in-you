import React, { useState } from 'react';
import MainBox from '@components/MainBox';
import UserList from '@components/UserList';
import ShareInviteLink from '@components/ShareInviteLink';
import BetPlayground from '@components/BetPlayground';

const getEmoji = () => {
  const devices = ['💻', '📱', '🎃'];
  return devices[Math.floor(Math.random()*devices.length)];
}

const users = [
  { username: 'Fulano' , emoji: getEmoji()},
  { username: 'Ciclano' , emoji: getEmoji()},
  { username: 'Guilerme da silva' , emoji: getEmoji()},
  { username: 'Mano mano' , emoji: getEmoji()},
]

function Play () {
  const [isPlaying, setPlaying] = useState(false);

  return (
    <div className='scene'>
      <MainBox>
        <UserList
          showRank={isPlaying}
          showAction={!isPlaying}
          handleAction={() => setPlaying(true)}
          users={users}
        />
        <ShareInviteLink show={!isPlaying} token='12' />
        <BetPlayground show={isPlaying} />
      </MainBox>
    </div>
  )
}

export default Play;