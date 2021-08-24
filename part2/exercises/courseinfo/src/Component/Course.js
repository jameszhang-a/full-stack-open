import React from 'react';
import { Header } from './Header';
import { Content } from './Content';
import { Sum } from './Sum';

export const Course = ({ course }) => {
  const { id, name, parts } = course;
  return (
    <div>
      <Header name={name} />
      <Content parts={parts} />
      <Sum parts={parts} />
    </div>
  );
};
