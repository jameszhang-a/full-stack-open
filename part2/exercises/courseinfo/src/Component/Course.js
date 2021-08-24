import React from 'react';
import { Header } from './Header';
import { Content } from './Content';
import { Sum } from './Sum';

export const Course = ({ courses }) => {
  const { id, name, parts } = courses;
  console.log(parts);
  return (
    <div>
      <Header name={name} />
      <Content parts={parts} />
      <Sum parts={parts} />
    </div>
  );
};
