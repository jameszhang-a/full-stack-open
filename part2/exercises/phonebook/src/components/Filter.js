import React from 'react';

export const Filter = ({ search, handleSearch }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input value={search} onChange={handleSearch} />
    </form>
  );
};
