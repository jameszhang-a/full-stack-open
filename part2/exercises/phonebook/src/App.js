import React, { useState } from 'react';
import { Filter } from './components/Filter';
import { People } from './components/People';
import { PersonForm } from './components/PersonForm';

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
  const [ found, setFound ] = useState(persons);

  const handleSubmit = (e) => {
    // Stops refresh on submit
    e.preventDefault();

    // Check for duplicates
    if (containsPerson()) {
      alert(`'${newName}' is already in the phonebook`);
      setNewName('');
      return;
    }

    const newPerson = persons.concat({
      name   : newName,
      number : newNum
    });

    // Adds new person to state
    setPersons(newPerson);
    setFound(newPerson);

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
    // Updates display of the search
    setSearch(e.target.value);

    // Filters out people that match the search
    setFound(
      persons.filter((person) =>
        person.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const containsPerson = () => {
    // `some` returns true if any returns true
    return persons.some((curr) => curr.name.localeCompare(newName) === 0);
  };

  return (
    <div className='App'>
      <h2>Phonebook</h2>

      <h3>Search by name</h3>
      <Filter search={search} handleSearch={handleSearch} />

      <h2>Add Entry</h2>
      <PersonForm
        onSubmit={handleSubmit}
        name={newName}
        number={newNum}
        nameChange={handleNameChange}
        numChange={handleNumChange}
      />

      <h2>Numbers</h2>
      <People show={found} />
    </div>
  );
};

export default App;
