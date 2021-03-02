import React, { useState, useEffect } from 'react';
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
  isSuspense
}) => {
  const [options, setOptions] = useState(initalState);
  const [isSelected, setSelected] = useState(false);

  useEffect(() => {
    if (matchId) {
      setSelected(false);
      const state = {...initalState}
      state[getRamdom(0, 2)] = true;
      setOptions(state)
    }
  },[matchId])

  const handleClick = (i: number) => {
    if (active) {
      setSelected(true);
      onClick(!options[i]);
    }
  }

  const getEmoji = (i: number) => {
    if (!isSelected && !isSuspense) return '🐝';
    return options[i] ? '🍯': '💩' ;
  }

  return (
    <style.Bar active={active} aria-label={`${value}x`}>
      <style.BarButton onClick={() => handleClick(0)}>{getEmoji(0)}</style.BarButton>
      <style.BarButton onClick={() => handleClick(1)}>{getEmoji(1)}</style.BarButton>
      <style.BarButton onClick={() => handleClick(2)}>{getEmoji(2)}</style.BarButton>
    </style.Bar>
  )
}

export default Bar;