import React from "react";
import notes from "../notes";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
      <button>DELETE</button>
    </div>
  );
}

export default Note;
