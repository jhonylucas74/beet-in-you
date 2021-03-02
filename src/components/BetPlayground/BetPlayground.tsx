import React, { useState } from 'react';
import Bar from './Bar'
import * as style from './BetPlayground.styles';

type BetPlaygroundProps = {
  show: boolean
};

const randomId = () => Math.random().toString(36).substring(7);

const bars = [
  1.5, 2.5, 3.5, 4.5, 5.5
].reverse()

export const BetPlayground : React.FC<BetPlaygroundProps> = ({ show }) => {
  const [becoins, setBecoins] = useState(500)
  const [bet, setBet] = useState(10)
  const [index, setIndex] = useState(0)
  const [matchId, setMatchId] = useState('')
  const [isSuspense, setSuspense] = useState(false)

  const createMatch = () => {
    setMatchId(randomId());
    setIndex(bars[bars.length - 1]);
    setSuspense(false);
  }
  
  const handleSelectBar = (i: number, hasFailed = false) => {
    if (hasFailed) {
      setIndex(0);
      setBecoins(becoins - bet);
      return setSuspense(true);
    }

    if (i < 0) {
      createMatch();
    } else {
      setIndex(bars[i])
    }
  }

  const incBet = () => {
    if (bet < 30 && index === 0) {
      setBet(bet + 5);
    }
  }

  const decBet = () => {
    if (bet > 10 && index === 0) {
      setBet(bet - 5);
    }
  }

  const getBtnText = () => {
    return index === 0 ? '💸 Apostar' : '💴 Terminar'
  }

  const handleCTA = () => {
    if (index === 0) {
      createMatch();
    } else {
      setIndex(0);
      setBecoins(becoins + (bet * index));
      return setSuspense(true);
    }
  }
  
  if (!show) return null;
  return (
    <style.Box>
      <style.Money>Você tem <span>{becoins}</span> beecoins</style.Money>
      <style.Bars>
        {bars.map((elm, i) =>
          <Bar
            key={elm}
            value={elm}
            isSuspense={isSuspense}
            matchId={matchId}
            onClick={(fail : boolean) => handleSelectBar(i - 1, fail)}
            active={index === elm}
          />
        )}
      </style.Bars>
      <style.Bet>
        <style.BetAmout disabled={index != 0}>
          <span onClick={() => decBet()}>-</span>
            {bet} becoins
          <span onClick={() => incBet()}>+</span>
        </style.BetAmout>
        <style.BetButton
          isPlaying={index != 0}
          onClick={handleCTA}>
            {getBtnText()}
        </style.BetButton>
      </style.Bet>
    </style.Box>
  )
};

export default BetPlayground;