import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([]);


  function addNote(note) {
    setNotes((prevValue) => {
      return [...prevValue, note]

    })
  }

  return (
    <div>
      <Header />
      <CreateArea
        onAdd={addNote}
      />
      {notes.map((noteItem) => {
        return <Note key={1} title={noteItem.title} content={noteItem.content} />
      })}

      <Footer />
    </div>
  );
}

export default App;
