import React from "react";
import notes from "../assests/data";
import ListItem from "../components/ListItem";

const NotesListPages = () => {
  return (
    <div>
      <div className="notes-list">
        {notes.map((noteObj, index) => (
          <ListItem key={index} noteProp={noteObj} />
        ))}
      </div>
    </div>
  );
};

export default NotesListPages;
