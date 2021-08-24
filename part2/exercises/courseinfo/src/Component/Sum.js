import React from 'react';

export const Sum = ({ parts }) => {
  const sum = parts.reduce((sum, cur) => {
    return sum + cur.exercises;
  }, 0);
  return <strong>Total of {sum} exercises</strong>;
};
