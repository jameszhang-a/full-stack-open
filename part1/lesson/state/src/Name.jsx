import React from 'react';

const Name = () => {
  console.log('hello from App component');
  const now = new Date();
  const a = 10;
  const b = 20;

  return (
    <div>
      <p>Hello world, it is now {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>

      <Hello name='james' age={50 / 2} />
      <Hello name='gene' age={40 + 3} />
    </div>
  );
};

/**
 * 	destructure props
 * 	
 * @returns A smaller component, that can be called by others
 */
const Hello = ({ name, age }) => {

  const bornYear = new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old, born in {bornYear}
      </p>
    </div>
  );
};

export default Name;
