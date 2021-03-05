import React, { useState, useEffect, useContext } from 'react';
import * as style from './TimeProgress.styles'
import useInterval from '@use-it/interval';
import GameState from '@store/gameState';
import dayjs from 'dayjs';
import { GameMode } from '@constants';

type TimeProgressProps = {
  
};

const TimeProgress : React.FC<TimeProgressProps> = ({
  
}) => {
  const [start, setStart] = useState(dayjs());
  const [end, setEnd] = useState(dayjs().add(2, 'minutes'));
  const [percentage, setPercentage] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const gameMode = GameState.useState();

  useEffect(() => {
    if (gameMode.time) {
     setStart(dayjs())
     setEnd(gameMode.time)
     setIsComplete(false)
    }
  }, [gameMode.time])

  useInterval(() => {
    const total = start.diff(end);
    const current = dayjs().diff(end);
    const percent = Math.min(100, 100 - ((current * 100) / total));

    if (percent === 100 && !isComplete) {
      setIsComplete(true)
      GameState.update(s => {
        switch (s.mode) {
          case GameMode.Easy:
            s.mode = GameMode.Medium;
            break;
          case GameMode.Medium:
            s.mode = GameMode.Hard;
            break;
          default:
          case GameMode.Hard:
            // end game
        }

        s.time = dayjs().add(0.5, 'minute');
      })
    }

    setPercentage(percent);
  }, 1000);

  return (
    <style.Progress percentage={percentage} />
  )
};

export default TimeProgress;