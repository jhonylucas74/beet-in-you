import React, { useState } from 'react';
import './App.css';
// scenes
import Choose from './scenes/Choose';
import Join from './scenes/Join';
import Play from './scenes/Play';
import Wait from './scenes/Wait';

function App() {
  const [scene, setScene] = useState('join')

  switch (scene) {
    case 'join':
      return <Join />
    case 'play':
      return <Play />
    case 'wait':
      return <Wait />
    case 'choose':
    default:
      return <Choose />
  }
}

export default App;
