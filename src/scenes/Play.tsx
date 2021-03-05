import React, { useState, useEffect } from 'react';
import MainBox from '@components/MainBox';
import UserList from '@components/UserList';
import ShareInviteLink from '@components/ShareInviteLink';
import BetPlayground from '@components/BetPlayground';
import Victory from '@components/Victory';
import { GameMode, LEVEL_TIME } from '@constants';
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
  const gameMode = GameState.useState(s => s.mode)

  const applyPlayChanges = () => {
    setPlaying(true);

    GameState.update(s => {
      s.mode = GameMode.Easy;
      s.time = dayjs().add(LEVEL_TIME, 'minutes');
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

  const isGameOver = gameMode === GameMode.GameOver;

  return (
    <div className='scene'>
      <MainBox>
        <UserList
          showRank={isPlaying}
          showAction={!isPlaying && host.isHost}
          handleAction={handlePlay}
          users={users}
        />
        <ShareInviteLink show={!isPlaying && !isGameOver} host={host} />
        <BetPlayground show={isPlaying && !isGameOver} />
        <Victory show={isGameOver} />
      </MainBox>
    </div>
  )
}

export default Play;