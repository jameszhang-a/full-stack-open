import React from 'react';

export const History = ({ history }) => {
  if (history.length === 0) {
    return <div>Start pressing buttons to see the history</div>;
  }
  return <div>{history.join(', ')}</div>;
};
