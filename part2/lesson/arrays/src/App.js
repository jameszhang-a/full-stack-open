import React, { useState } from 'react';
import { Note } from './Note';

const App = ({ notes }) => {
  const [ addNote, setAddNote ] = useState(notes);
  const [ newNote, setNewNote ] = useState('');

  // Uses value from newNote state
  const submitForm = (e) => {
    e.preventDefault();

    // Construct new note to be posted
    const note = {
      content   : newNote,
      date      : new Date().toISOString(),
      important : Math.random < 0.5,
      id        : addNote.length + 1
    };
    setAddNote(addNote.concat(note));
    setNewNote('');
  };

  // Changes what's displayed in the input field
  const handleChange = (e) => {
    console.log(e.target.value);
    setNewNote(e.target.value);
  };

  return (
    <div>
      <h1>Notes</h1>
      {/* List items generated with map need a unique id */}
      {/* !!! DONT use index as keys !!!*/}
      <ul>{addNote.map((note) => <Note key={note.id} note={note} />)}</ul>

      {/* form for adding notes */}
      <form onSubmit={submitForm}>
        {/* handleChange is called each time the field is changed */}
        <input value={newNote} onChange={handleChange} />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default App;
