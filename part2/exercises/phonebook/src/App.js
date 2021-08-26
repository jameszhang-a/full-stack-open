import React, { useState } from 'react';

const App = () => {
  const [ person, setPerson ] = useState([ { name: 'Arto Hellas' } ]);
  const [ newName, setNewName ] = useState('');

  const handleSubmit = (e) => {
    // Stops refresh on submit
    e.preventDefault();
    const newPerson = {
      name : newName
    };

    // Check for duplicates
    if (containsPerson()) {
      alert(`${newName} is already in the phonebook`);
      setNewName('');
      return;
    }
    console.log(containsPerson());

    // Adds new person to state
    setPerson(person.concat(newPerson));
    // Clears field
    setNewName('');
  };

  const handleFormChange = (e) => {
    setNewName(e.target.value);
  };

  const containsPerson = () => {
    // `some` returns true if any returns true
    return person.some((curr) => curr.name.localeCompare(newName) === 0);
  };

  return (
    <div className='App'>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleFormChange} />
        </div>

        <div>
          <button type='submit'>add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <div>
        {person.map((person) => {
          return <div key={person.name}>{person.name}</div>;
        })}
      </div>
    </div>
  );
};

export default App;
