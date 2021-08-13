import { Button } from './Button';
import { useState } from 'react';
import { StatsDisplay } from './StatsDisplay';

function App() {
  // States for the ratings
  const [ good, setGood ] = useState(0);
  const [ neutral, setNeutral ] = useState(0);
  const [ bad, setBad ] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
  };

  return (
    <div className='App'>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text='good' />
      <Button onClick={handleNeutral} text='neutral' />
      <Button onClick={handleBad} text='bad' />

      <h1>statistics</h1>
      <StatsDisplay good={good} bad={bad} neutral={neutral} />
    </div>
  );
}

export default App;
