import React, { useEffect, useState } from "react";
//import notes from "../assests/data"; - no longer using this file.
import ListItem from "../components/ListItem";
import AddButton from "../components/AddButton";

const NotesListPages = () => {
  let [notes, setNotes] = useState([]);

  useEffect(() => {
    getNote();
  }, []);

  let getNote = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/notes/");
    let data = await response.json();
    console.log("DATA:", data);
    setNotes(data);
  };

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
      <AddButton />
    </div>
  );
};

export default NotesListPages;
