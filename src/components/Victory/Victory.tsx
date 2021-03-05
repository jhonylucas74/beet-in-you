import React, { useState,useEffect } from 'react';
import * as style from './Victory.styles'
import useInterval from '@use-it/interval';
import confetti from '../BetPlayground/confetti';
import UsersStore from '@store/users';

type VictoryProps = {
  show: boolean
}

const getSorted = (users: any) => {
  return [...users].sort((a: any, b: any) => {
    if (a.becoins > b.becoins) return -1;
    if (a.becoins < b.becoins) return 1;
    return 0
  })
}

const Victory : React.FC<VictoryProps> = ({
  show
}) => {
  const user = UsersStore.useState(s => {
    return getSorted((s.users || []))[0]
  })
  
  useInterval(() => {
    if (user && show) confetti();
  }, 3000)

  if (!user || !show) return null;

  return (
    <style.Content>
      <h4>{String.fromCodePoint(parseInt(user.emoji, 16))} {user.username} é o vencedor!</h4>
    </style.Content>
  )
};

export default Victory;