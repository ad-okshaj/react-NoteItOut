// import notes from "../assests/data"; - no longer using this file.
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assests/arrow-left.svg";

const NotePage = () => {
  let navigate = useNavigate();
  let { noteID } = useParams();
  //  const specificNote = notes.find((specific) => specific.id === Number(id)); //filter for matching note with specific id
  let [specificNote, setSpecificNote] = useState(null);

  let getNote = async () => {
    if (noteID === "new") return;
    let response = await fetch(`/api/notes/${noteID}/`);
    let data = await response.json();
    setSpecificNote(data);
  };

  useEffect(() => {
    getNote();
  }, [noteID]);

  let createNote = async () => {
    await fetch(`/api/notes/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...specificNote, updated: new Date() }),
    });
    this.forceUpdate();
  };

  let updateNote = async () => {
    fetch(`/api/notes/${noteID}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(specificNote),
    });
    this.forceUpdate();
  };

  let deleteNote = async () => {
    await fetch(`/api/notes/${noteID}/`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({ specificNote }), not required for delete
    });
    navigate("/");
  };

  let handleSubmit = () => {
    if (noteID !== "new" && !specificNote.body) {
      deleteNote();
    } else if (noteID !== "new") {
      updateNote();
    } else if (noteID === "new" && specificNote !== null) {
      createNote();
    }
    navigate("/");
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <ArrowLeft onClick={handleSubmit} />
        </h3>

        {noteID !== "new" ? (
          <button onClick={deleteNote}>Delete</button>
        ) : (
          <button onClick={handleSubmit}>Done</button>
        )}
      </div>
      <textarea
        onChange={(e) => {
          setSpecificNote({ ...specificNote, body: e.target.value });
        }}
        value={specificNote?.body}
      ></textarea>
    </div>
  );
};

export default NotePage;
