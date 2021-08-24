import React from 'react';
import { Note } from './Note';

const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      {/* List items generated with map need a unique id */}
      {/* !!! DONT use index as keys !!!*/}
      <ul>{notes.map((note) => <Note key={note.id} note={note} />)}</ul>
    </div>
  );
};

export default App;
