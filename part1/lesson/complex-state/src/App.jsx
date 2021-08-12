import { useState } from 'react';

const App = () => {
  const [ clicks, setClicks ] = useState({
    left  : 0,
    right : 0
  });

  const increaseRight = () => {
    setClicks({
      ...clicks,
      right : clicks.right + 1
    });
  };

  const increaseLeft = () => {
    setClicks({
      ...clicks,
      left : clicks.left + 1
    });
  };

  return (
    <div>
      {clicks.left}
      <button onClick={() => increaseLeft()}>left</button>
      <br />
      {clicks.right}
      <button onClick={() => increaseRight()}>right</button>
    </div>
  );
};

export default App;
