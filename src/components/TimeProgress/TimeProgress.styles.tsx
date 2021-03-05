import styled from 'styled-components';
import { theme } from '@style';

type ProgressProps = {
  percentage: number
}

export const Progress = styled.div<ProgressProps>`
  display: block;
  width: 90%;
  height: 6px;
  margin: 20px 5%;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  background-color: hsla(0deg 0% 0% / 10%);

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    width: ${({ percentage }) => percentage.toFixed(0)}%;
    height: 6px;
    border-radius: 4px;
    transform: translateY(-50%);
    background-color: #daba65;
    transition: width 1s ease;
  }
`