import React from 'react';

export const ButtonCount = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};
