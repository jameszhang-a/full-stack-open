import React from 'react';

const App = (props) => {
  const { notes } = props;

  return (
    <div>
      <h1>Notes</h1>
      {/* List items generated with map need a unique id */}
      {/* !!! DONT use index as keys !!!*/}
      <ul>{notes.map((note) => <li key={note.id}>{note.content}</li>)}</ul>
    </div>
  );
};

export default App;
