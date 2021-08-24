import React from 'react';
import { Course } from './Course';

export const Courses = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => <Course key={course.id} course={course} />)}
    </div>
  );
};
