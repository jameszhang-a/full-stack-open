import React from 'react';

const App = () => {
  // defining course object
  const course = {
    name  : 'Half Stack application development',

    // array of part objects
    parts : [
      {
        name      : 'Fundamentals of React',
        exercises : 10
      },
      {
        name      : 'Using props to pass data',
        exercises : 7
      },
      {
        name      : 'State of a component',
        exercises : 14
      }
    ]
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

const Header = (props) => <h1>{props.course.name}</h1>;

const Content = (props) => {
  return (
    <div>
      <Part part={props.course.parts[0]} />
      <Part part={props.course.parts[1]} />
      <Part part={props.course.parts[2]} />
    </div>
  );
};

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
);

const Total = (props) => {
  return (
    <p>
      Number of exercises{' '}
      {props.course.parts[0].exercises +
        props.course.parts[1].exercises +
        props.course.parts[2].exercises}
    </p>
  );
};
export default App;
