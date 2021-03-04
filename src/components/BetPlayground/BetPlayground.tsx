import React, { useState } from 'react';
import Bar from './Bar'
import { GameMode } from '@constants';
import confetti from './confetti';
import * as style from './BetPlayground.styles';
import { playAudio } from '@utils/audio';

type BetPlaygroundProps = {
  show: boolean
};

const randomId = () => Math.random().toString(36).substring(7);

const bars = [
  1.5, 2.5, 3.5, 4.5, 5.5
].reverse()

export const BetPlayground : React.FC<BetPlaygroundProps> = ({ show }) => {
  const [becoins, setBecoins] = useState(500);
  const [bet, setBet] = useState(10);
  const [index, setIndex] = useState(-1);
  const [matchId, setMatchId] = useState('');
  const [isSuspense, setSuspense] = useState(false);

  const createMatch = () => {
    setMatchId(randomId());
    setIndex(bars.length - 1);
    setSuspense(false);
  }
  
  const handleSelectBar = (i: number, hasFailed = false) => {
    if (hasFailed) {
      setIndex(-1);
      playAudio('fail');
      setBecoins(becoins - bet);
      return setSuspense(true);
    }

    if (i < 0) {
      confetti();
      playAudio('strike');
      receiveBecoins();
    } else {
      playAudio('sucess');
      setIndex(i);
    }
  }

  const incBet = () => {
    if (bet < 30 && index === -1) {
      setBet(bet + 5);
    }
  }

  const decBet = () => {
    if (bet > 10 && index === -1) {
      setBet(bet - 5);
    }
  }

  const getBtnText = () => {
    return index === -1 ? '💸 Apostar' : '💴 Terminar'
  }

  const receiveBecoins = () => {
    const multiplier = bars[index + 1];
    setIndex(-1);

    if (multiplier) {
      setBecoins(becoins + (bet * multiplier));
      setSuspense(true);
    }
  }

  const handleCTA = () => {
    if (index === -1) {
      playAudio('start');
      createMatch();
    } else {
      if (index != bars.length - 1) {
        playAudio('cash');
      }

      receiveBecoins();
    }
  }
  
  if (!show) return null;
  return (
    <style.Box>
      <style.Money>Você tem <span>{becoins}</span> beecoins</style.Money>
      <style.Bars>
        {bars.map((elm, i) =>
          <Bar
            gameMode={GameMode.Easy}
            key={elm}
            value={elm}
            isSuspense={isSuspense}
            matchId={matchId}
            onClick={(fail : boolean) => handleSelectBar(i - 1, fail)}
            active={index === i}
          />
        )}
      </style.Bars>
      <style.Bet>
        <style.BetAmout disabled={index != -1}>
          <span onClick={() => decBet()}>-</span>
            {bet} becoins
          <span onClick={() => incBet()}>+</span>
        </style.BetAmout>
        <style.BetButton
          isPlaying={index != -1}
          onClick={handleCTA}>
            {getBtnText()}
        </style.BetButton>
      </style.Bet>
    </style.Box>
  )
};

export default BetPlayground;