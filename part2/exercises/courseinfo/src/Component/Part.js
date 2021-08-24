import React from 'react';

export const Part = ({ part }) => {
  const { name, exercises, id } = part;
  return <p>{`${name} ${exercises}`}</p>;
};
