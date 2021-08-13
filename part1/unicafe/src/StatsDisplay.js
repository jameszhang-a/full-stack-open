import React from 'react';
import { StatsLine } from './StatsLine';

export const StatsDisplay = ({ good, bad, neutral }) => {
  const total = good + bad + neutral;
  if (total < 1) {
    return <div>No feedback given</div>;
  }
  return (
    <div>
      <StatsLine text='good' stat={good} />
      <StatsLine text='neutral' stat={neutral} />
      <StatsLine text='bad' stat={bad} />
      <StatsLine text='all' stat={total} />
      <StatsLine text='average' stat={(good - bad) / total} />
      <StatsLine text='positive' stat={good / total * 100 + ' %'} />
    </div>
  );
};
