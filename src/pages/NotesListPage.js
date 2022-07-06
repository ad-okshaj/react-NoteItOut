import React from "react";
import notes from "../assests/data";
import ListItem from "../components/ListItem";

const NotesListPages = () => {
  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782; Notes</h2>
        <p className="notes-count">{notes.length}</p>
      </div>
      <div className="notes-list">
        {notes.map((noteObj, index) => (
          <ListItem key={index} noteProp={noteObj} />
        ))}
      </div>
    </div>
  );
};

export default NotesListPages;
