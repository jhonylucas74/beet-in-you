import React, { useState } from 'react';
import './App.css';
// scenes
import Choose from './scenes/Choose';
import Join from './scenes/Join';
import Play from './scenes/Play';

function App() {
  const [scene, setScene] = useState('play');

  switch (scene) {
    case 'join':
      return <Join />
    case 'play':
      return <Play />
    case 'choose':
    default:
      return <Choose />
  }
}

export default App;
