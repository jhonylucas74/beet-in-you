import { createContext } from 'react';
import { GameMode } from '@constants';
import dayjs from 'dayjs';

const GameContext = createContext({ mode: GameMode.Easy, time: dayjs() });
export default GameContext;