import React from 'react';

export const People = ({ show }) => {
  return (
    <div>
      {show.map((person) => {
        return (
          <div key={person.name}>
            {person.name} {person.number}
          </div>
        );
      })}
    </div>
  );
};
