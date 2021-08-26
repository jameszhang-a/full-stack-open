import React, { useState } from 'react';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [ newName, setNewName ] = useState('');
  const [ newNum, setNewNum ] = useState('');
  const [ search, setSearch ] = useState('');

  const handleSubmit = (e) => {
    // Stops refresh on submit
    e.preventDefault();
    const newPerson = {
      name   : newName,
      number : newNum
    };

    // Check for duplicates
    if (containsPerson()) {
      alert(`${newName} is already in the phonebook`);
      setNewName('');
      return;
    }
    console.log(containsPerson());

    // Adds new person to state
    setPersons(persons.concat(newPerson));
    // Clears field
    setNewName('');
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumChange = (e) => {
    setNewNum(e.target.value);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const foundPerson = persons.filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  const containsPerson = () => {
    // `some` returns true if any returns true
    return persons.some((curr) => curr.name.localeCompare(newName) === 0);
  };

  return (
    <div className='App'>
      <h2>Phonebook</h2>

      <h3>Search by name</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <input value={search} onChange={handleSearch} />
      </form>

      <h2>Add Entry</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>

        <div>
          number: <input value={newNum} onChange={handleNumChange} />
        </div>

        <div>
          <button type='submit'>add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <div>
        {foundPerson.map((person) => {
          return (
            <div key={person.name}>
              {person.name} {person.number}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
