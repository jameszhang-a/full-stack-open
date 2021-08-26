import React from 'react';

export const PersonForm = ({
  onSubmit,
  name,
  number,
  nameChange,
  numChange
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input value={name} onChange={nameChange} />
      </div>

      <div>
        number: <input value={number} onChange={numChange} />
      </div>

      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  );
};
