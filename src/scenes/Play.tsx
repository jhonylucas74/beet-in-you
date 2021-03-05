import React, { useState, useEffect } from 'react';
import MainBox from '@components/MainBox';
import UserList from '@components/UserList';
import ShareInviteLink from '@components/ShareInviteLink';
import BetPlayground from '@components/BetPlayground';
import { GameMode } from '@constants';
import GameState from '@store/gameState';
import usePeerEvent from '@utils/hooks/usePeerEvent';
import PeerController from '@utils/PeerController';
import dayjs from 'dayjs';

type PlayProps = {
  userStore: any,
  host: { 
    isHost: boolean,
    id: string
  }
}

const Play: React.FC<PlayProps> = ({ host, userStore }) => {
  const [isPlaying, setPlaying] = useState(false);
  const users = userStore.useState((s: any) => s.users);

  const applyPlayChanges = () => {
    setPlaying(true);

    GameState.update(s => {
      s.mode = GameMode.Easy;
      s.time = dayjs().add(0.5, 'minute');
    })
  }

  const handlePlay = () => {
    applyPlayChanges()
    PeerController.send({ event: 'GameIsPlaying', data: true })
  }

  usePeerEvent('JoinPlayer', (user: any) => {
    const newUser = {
      username: user.name,
      emoji: user.emoji,
      becoins: 500
    }

    if (host.isHost) {
      const data = userStore.getRawState()

      PeerController.send({
        event: 'UpdateUsers',
        data: [...data.users, newUser]
      });
    }

    userStore.update((s: any) => {
      s.users = [...s.users, newUser]
    })
  })

  usePeerEvent('UpdateBecoins', (user: any) => {
    userStore.update((s: any) => {
      s.users = s.users.map((elm: any) => {
        if (elm.username === user.username) {
          elm.becoins = user.becoins
        }
        return elm;
      })
    })
  })

  usePeerEvent('UpdateUsers', (state: any) => {
    userStore.update((s: any) => {
      s.users = state || []
    })
  })
  
  usePeerEvent('GameIsPlaying', () => {
    applyPlayChanges()
  })

  return (
    <div className='scene'>
      <MainBox>
        <UserList
          showRank={isPlaying}
          showAction={!isPlaying && host.isHost}
          handleAction={handlePlay}
          users={users}
        />
        <ShareInviteLink show={!isPlaying} host={host} />
        <BetPlayground show={isPlaying} />
      </MainBox>
    </div>
  )
}

export default Play;