import React from 'react';

const App = () => {
	// defining consts
	const course = 'Half Stack application development';
	const part1 = {
		name: 'Fundamentals of React',
		exercises: 10
	};
	const part2 = {
		name: 'Using props to pass data',
		exercises: 7
	};

	const part3 = {
		name: 'State of a component',
		exercises: 14
	};

	console.log('inside app');
	return (
		<div>
			<Header course={course} />
			<Content part1={part1} part2={part2} part3={part3} />
			<Total ex1={part1} ex2={part2} ex3={part3} />
		</div>
	);
};

const Header = (props) => <h1>{props.course}</h1>;

const Content = (props) => (
	<div>
		<Part name={props.part1.name} exercise={props.part1.exercises} />
		<Part name={props.part2.name} exercise={props.part2.exercises} />
		<Part name={props.part3.name} exercise={props.part3.exercises} />
	</div>
);

const Part = (props) => (
	<p>
		{props.name} {props.exercise}
	</p>
);

const Total = (props) => <p>Number of exercises {props.ex1.exercises + props.ex2.exercises + props.ex3.exercises}</p>;

export default App;
