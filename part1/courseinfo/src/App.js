import React from 'react';

const App = () => {
	// defining consts
	const course = 'Half Stack application development';
	const part1 = 'Fundamentals of React';
	const exercises1 = 10;
	const part2 = 'Using props to pass data';
	const exercises2 = 7;
	const part3 = 'State of a component';
	const exercises3 = 14;

	console.log('inside app');
	return (
		<div>
			<Header course={course} />

			<Content part={part1} exercise={exercises1} />
			<Content part={part2} exercise={exercises2} />
			<Content part={part3} exercise={exercises3} />

			<Total ex1={exercises1} ex2={exercises2} ex3={exercises3} />
		</div>
	);
};

const Header = (props) => <h1>{props.course}</h1>;

const Content = (props) => (
	<p>
		{props.part} {props.exercise}
	</p>
);

const Total = (props) => <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>;

export default App;
