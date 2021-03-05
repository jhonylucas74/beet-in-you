import { createContext } from 'react';
import { GameMode } from '@constants';

const GameContext = createContext(GameMode.Easy);
export default GameContext;