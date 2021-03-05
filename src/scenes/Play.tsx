import React, { useState, useEffect } from 'react';
import MainBox from '@components/MainBox';
import UserList from '@components/UserList';
import ShareInviteLink from '@components/ShareInviteLink';
import BetPlayground from '@components/BetPlayground';
import { GameMode } from '@constants';
import GameModeContext from '@contexts/GameMode';
import usePeerEvent from '@utils/hooks/usePeerEvent';
import PeerController from '@utils/PeerController';

type PlayProps = {
  userStore: any,
  host: { 
    isHost: boolean,
    id: string
  }
}

const Play: React.FC<PlayProps> = ({ host, userStore }) => {
  const [isPlaying, setPlaying] = useState(false);
  const [gameMode, SetGameMode] = useState(GameMode.Easy);
  const users = userStore.useState((s: any) => s.users);

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
    setPlaying(true);
  })

  return (
    <div className='scene'>
      <MainBox>
        <UserList
          showRank={isPlaying}
          showAction={!isPlaying && host.isHost}
          handleAction={() => {
            setPlaying(true);
            PeerController.send({ event: 'GameIsPlaying', data: true })
          }}
          users={users}
        />
        <GameModeContext.Provider value={gameMode}>
          <ShareInviteLink show={!isPlaying} host={host} />
          <BetPlayground show={isPlaying} />
        </GameModeContext.Provider>
      </MainBox>
    </div>
  )
}

export default Play;