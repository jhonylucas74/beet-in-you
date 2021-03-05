import React, { useState, useEffect } from 'react';
import PeerController from '@utils/PeerController';
import QueryString from 'query-string';
import { Store } from 'pullstate'
import UserStore from '@store/user';
import UsersStore from '@store/users';
import './App.css';
// scenes
import Choose from './scenes/Choose';
import Join from './scenes/Join';
import Play from './scenes/Play';



function App() {
  const [scene, setScene] = useState('choose');
  const [host, setHost] = useState({ isHost: false, id: '' })

  const handleConnection = async () => {
    const parsed : any = QueryString.parse(window.location.search);
    const hostId : string = parsed.hostId;

    if (hostId) setScene('join');
    const id = await PeerController.create();

    if (hostId) {
      setHost({ isHost: false, id: hostId });

      PeerController.connect(hostId)
        .then(() => console.log('connect with sucess'))
    } else {
      setHost({ isHost: true, id: id });
    }
  }

  const handleCreate = () => {
    setScene('join');
  };

  const handleJoin = (data: any) => {
    PeerController.send({ event: 'JoinPlayer', data });

    UserStore.update((s: any) => {
      s.user = data
    });

    UsersStore.update((s: any) => {
      s.users = [...s.users, { username: data.name, emoji: data.emoji }]
    });

    setScene('play');
  }

  useEffect(() => {
    handleConnection();
  }, [])

  switch (scene) {
    case 'join':
      return <Join handleJoin={handleJoin} />
    case 'play':
      return <Play userStore={UsersStore} host={host}/>
    case 'choose':
    default:
      return <Choose handleCreate={handleCreate} />
  }
}

export default App;
