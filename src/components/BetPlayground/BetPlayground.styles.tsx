import styled, { css } from 'styled-components';
import { theme } from '@style';

export const Box = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  position: relative;
`;

export const Money = styled.div`
  font-size: 18px;
  font-weight: 600;
  padding: 8px 15px;
  text-align: center;
  width: 250px;
  color: #4b4b4b;
  border-bottom: 1px solid #dbdbdb;
  margin-top: 20px;
  
  span {
    color: #d8b64e;
  }
`;

export const Bars = styled.div`
  width: 100%;
  padding: 20px 20px 0 20px;
  box-sizing: border-box;
`;

const activeBar = css`
  z-index: 2;
  background-color: #000;
  box-shadow: 0 0 0px 4px #000000;
  border-radius: 10px;
  position: relative;

  button {
    cursor: pointer;
    background-color: #d4f9dc;

    &:hover {
    background-color: #b0fbc0;
    }
  }
  
  &:after {
    content: attr(aria-label);
    text-align: center;
    padding: 4px 8px;
    font-size: 12px;
    font-weight: 600;
    position: absolute;
    background-color: #000;
    color: #fff;
    width: 50px;
    left: 50%;
    top: 0;
    transform: translate(-50%, -100%);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
`;

type BarProps = {
  active: boolean
}

export const Bar = styled.div<BarProps>`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  margin-bottom: 10px;

  ${({active}) => active && activeBar}
`;

type BarBtnProps = {
  isFail: boolean,
  isSelected: boolean
}

export const BarButton = styled.button<BarBtnProps>`
  flex: 1;
  position: relative;
  display: block;
  padding: 10px 15px;
  font-size: 20px;
  font-weight: 600;
  border-radius: 8px;
  background-color: hsl(44deg 47% 92%);
  border: none;
  transition: all 0.3s ease-in-out;
  cursor: default;
  outline: none;
  
  ${({ isFail, isSelected }) => isFail && css`
    background-color: ${isSelected ? '#f1bcaf' : '#dacfaf'};
  `}
`;



export const Bet = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  gap: 5px;
`;


type BetAmountProp = {
  disabled: boolean
}

export const BetAmout = styled.div<BetAmountProp>`
  flex: 1;
  display: block;
  position: relative;
  box-sizing: border-box;
  padding: 10px 15px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
  color: #000;
  background-color: #f2f2f2;
  outline: none;
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;

  ${({ disabled }) => disabled && css`
    pointer-events: none;
    opacity: 0.5;
  `}

  span {
    position: absolute;
    font-size: 26px;
    top: 0;
    bottom: 0;
    width: 50px;
    line-height: 34px;
    color: hsla(0deg 0% 0% / 40%);

    &:hover {
      color: #000;
    }
  }

  span:first-child {
    left: 0;
    font-size: 32px;
    border-right: 2px solid #c3c3c3;
  }

  span:last-child {
    right: 0;
    border-left: 2px solid #c3c3c3;
  }
`;

type BetButtonProps = {
  isPlaying: boolean,
  disabled: boolean
}

export const BetButton = styled.div<BetButtonProps>`
  flex: 1;
  display: block;
  position: relative;
  box-sizing: border-box;
  padding: 10px 15px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
  color: #000;
  background-color: ${theme.primaryColorLight};
  outline: none;
  transition: all 0.3s ease-in-out;

  ${({ isPlaying }) => isPlaying && css`
    background-color: #d4f9dc;
  `}

  &:hover {
    color: #fff;
    background-color: #4c4b4b;
  }

  ${({ disabled }) => disabled && css`
    opacity: 0.5;
    background-color: hsla(0deg 0% 0% / 10%);
    pointer-events: none;
  `}
`;

type DiffCoinsProps = {
  isPositive: boolean
}

export const DiffCoins =  styled.span<DiffCoinsProps>`
  position: absolute;
  left: 50%;
  top: 5px;
  font-size: 18px;
  font-weight: 600;
  color: ${({ isPositive }) => isPositive? '#82d082': '#f36e7e' };
  transform: translateX(-50%); 
`