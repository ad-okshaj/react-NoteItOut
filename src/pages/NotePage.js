// import notes from "../assests/data"; - no longer using this file.
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assests/arrow-left.svg";

const NotePage = () => {
  let navigate = useNavigate();
  let { noteID } = useParams();
  //  const specificNote = notes.find((specific) => specific.id === Number(id)); //filter for matching note with specific id
  let [specificNote, setSpecificNote] = useState(null);

  useEffect(() => {
    getNote();
  }, []);

  let getNote = async () => {
    if (noteID === "new") return;
    let response = await fetch(`/api/notes/${noteID}`);
    let data = await response.json();
    setSpecificNote(data);
  };

  let createNote = async () => {
    await fetch(`/api/notes/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...specificNote, updated: new Date() }),
    });
  };

  let updateNote = async () => {
    await fetch(`/api/notes/${noteID}/update/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(specificNote),
    });
  };

  let deleteNote = async () => {
    await fetch(`/api/notes/${noteID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ specificNote }),
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
