import React, { useState } from 'react';
import { ButtonCount } from './ButtonCount';
import { DisplayCount } from './DisplayCount';

const Count = () => {
  const [ count, setCount ] = useState(0);

  const handleClick = () => setCount(count + 1);
  const setZero = () => setCount(0);

  return (
    <div>
      <DisplayCount count={count} />
      <ButtonCount onClick={handleClick} text='Plus' />
      <ButtonCount onClick={setZero} text='Zero' />
    </div>
  );
};

export default Count;
