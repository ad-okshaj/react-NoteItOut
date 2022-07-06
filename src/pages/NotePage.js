import React from "react";
import notes from "../assests/data";

const NotePage = ({ match }) => {
  let noteID = match.params.id;
  let specificNote = notes.find(
    (specificNote) => specificNote.id === Number(noteID)
  ); //filter for matching note with specific id
  return (
    <div>
      <p>Hello, Clarice.</p>
      <p>{specificNote?.body}</p>
    </div>
  );
};

export default NotePage;
