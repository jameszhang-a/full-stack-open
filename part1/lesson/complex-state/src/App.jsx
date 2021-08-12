import { useState } from 'react';

const App = () => {
  const [ left, setLeft ] = useState(0);
  const [ right, setRight ] = useState(0);
  const [ allClicks, setAllClicks ] = useState([]);

  const handleRight = () => {
    setRight(right + 1);
    setAllClicks(allClicks.concat('R'));
  };
  const handleLeft = () => {
    setLeft(left + 1);
    setAllClicks(allClicks.concat('L'));
  };

  return (
    <div>
      {left}
      <button onClick={() => handleLeft()}>left</button>

      <button onClick={() => handleRight()}>right</button>
      {right}
      <div>{allClicks.join(', ')}</div>
    </div>
  );
};

export default App;
