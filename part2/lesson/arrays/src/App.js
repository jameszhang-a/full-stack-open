import React, { useState } from 'react';
import { Note } from './Note';

const App = (props) => {
  const [ notes, setNotes ] = useState(props.notes);
  const [ newNote, setNewNote ] = useState('');
  const [ showAll, setShowAll ] = useState(true);

  // Uses value from newNote state
  const submitForm = (e) => {
    e.preventDefault();

    // Construct new note to be posted
    const note = {
      content   : newNote,
      date      : new Date().toISOString(),
      important : Math.random() > 0.5,
      id        : notes.length + 1
    };

    // Add new obj containing note to state
    setNotes(notes.concat(note));
    setNewNote('');
  };

  // Changes what's displayed in the input field
  const handleChange = (e) => {
    setNewNote(e.target.value);
  };

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };

  // Toggle for showing/hiding important tasks
  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={handleToggleShowAll}>
        {showAll ? 'Toggle Important' : 'Show All'}
      </button>

      {/* List items generated with map need a unique id */}
      {/* !!! DONT use index as keys !!!*/}
      <ul>{notesToShow.map((note) => <Note key={note.id} note={note} />)}</ul>

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
