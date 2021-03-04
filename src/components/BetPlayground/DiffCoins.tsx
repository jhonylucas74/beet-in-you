import React from 'react';
import { motion } from 'framer-motion';
import * as style from './BetPlayground.styles';

type snap = {
  value: string
  time: string
}

type DiffCoinsProps = {
  data?: snap
}

const DiffCoins : React.FC<DiffCoinsProps> =  ({ data }) => {
  if (!data) return null;

  return (
    <motion.div
      animate={{ opacity: [1, 0], y: [0, -10] }}
      key={data.time}
    >
      <style.DiffCoins isPositive={/\+/.test(data.value)}>
        {data.value}
      </style.DiffCoins>
    </motion.div>
  )
}

export default DiffCoins;
