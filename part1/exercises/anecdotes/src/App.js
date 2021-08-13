import React, { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ];

  // State for the current quote and the last
  const [ selected, setSelected ] = useState(0);

  // Set the initial vote for each quote to 0
  const initialScore = {};
  for (let i in anecdotes) {
    initialScore[i] = 0;
  }
  const [ score, setScore ] = useState(initialScore);

  const randomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const getNextAnecdote = () => {
    let idx = randomInt(anecdotes.length);

    // make sure the same quote doesn't get picked twice
    while (idx === selected) idx = randomInt(anecdotes.length);
    setSelected(idx);
  };

  const updateScore = () => {
    let copy = { ...score };
    copy[selected] += 1;
    setScore(copy);
  };

  const bestAnecdote = () => {
    let best,
      highVote = 0;
    for (const idx in score) {
      if (Object.hasOwnProperty.call(score, idx)) {
        if (score[idx] > highVote) {
          highVote = score[idx];
          best = anecdotes[idx];
        }
      }
    }
    return best;
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {score[selected]} votes</div>
      <button onClick={updateScore}>vote</button>
      <button onClick={getNextAnecdote}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <div>{bestAnecdote()}</div>
    </div>
  );
};

export default App;
