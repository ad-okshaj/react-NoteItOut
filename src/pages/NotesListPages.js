import React from "react";
import notes from "../assests/data";

const NotesListPages = () => {
  return (
    <div>
      <div className="notes-list">
        {notes.map((note) => (
          <p>{note.body}</p>
        ))}
      </div>
    </div>
  );
};

export default NotesListPages;
