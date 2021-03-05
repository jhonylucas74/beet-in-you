import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { GameMode } from '@constants';
import GameState from '@store/gameState';
import * as style from './BetPlayground.styles';

type BarProps = {
  matchId: string
  active: boolean,
  isSuspense: boolean,
  value: number,
  onClick: Function,
}

const getRamdom = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

const initalState = [false, false, false];

const Bar : React.FC<BarProps> =  ({
  matchId,
  value,
  active,
  onClick,
  isSuspense,
}) => {
  const [options, setOptions] = useState(initalState);
  const [choonse, setChoonse] = useState(-1);
  const [isSelected, setSelected] = useState(false);
  const gameMode = GameState.useState();

  const resetBarState = () => {
    setSelected(false);
    let state = {...initalState}

    if (gameMode.mode === GameMode.Easy) {
      state = [true, true, true];
    }

    const limit = gameMode.mode === GameMode.Medium ? 1 : 2;
    state[getRamdom(0, limit)] = gameMode.mode !== GameMode.Easy;
    setOptions(state);
    setChoonse(-1);
  }

  useEffect(() => {
    if (matchId) {
      resetBarState();
    }
  },[matchId])

  const handleClick = (i: number) => {
    if (active) {
      setChoonse(i);
      setSelected(true);
      onClick(!options[i]);
    }
  }

  const getEmoji = (i: number) => {
    if ((!isSelected || choonse !== i) && !isSuspense) 
      return <motion.div animate={{ scale: 1 }}>🐝</motion.div>;
    
    if (options[i]) {
      return <motion.div animate={{ scale: [0.5, 1.1, 1] }}>🍯</motion.div>;
    } else {
      return <motion.div animate={{ scale: [0.5, 1.2, 1] }}>💩</motion.div>;
    }
  }

  const showBg = (i: number) => {
    if ((!isSelected || choonse !== i) && !isSuspense)
      return false;

    return !options[i]
  }

  return (
    <style.Bar active={active} aria-label={`${value}x`}>
      <style.BarButton 
        isFail={showBg(0)}
        isSelected={choonse === 0}
        onClick={() => handleClick(0)}>
          {getEmoji(0)}
      </style.BarButton>
      <style.BarButton 
        isFail={showBg(1)}
        isSelected={choonse === 1}
        onClick={() => handleClick(1)}>
          {getEmoji(1)}
      </style.BarButton>
      { gameMode.mode !== GameMode.Medium && <style.BarButton 
        isFail={showBg(2)}
        isSelected={choonse === 2}
        onClick={() => handleClick(2)}>
          {getEmoji(2)}
      </style.BarButton>}
    </style.Bar>
  )
}

export default Bar;