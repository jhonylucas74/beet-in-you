import { Store } from 'pullstate';
import { GameMode } from '@constants';
import dayjs from 'dayjs';

export default new Store({ mode: GameMode.Easy, time: dayjs() });