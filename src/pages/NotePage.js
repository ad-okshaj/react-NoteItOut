// import notes from "../assests/data"; - no longer using this file.
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assests/arrow-left.svg";

const NotePage = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  //  const specificNote = notes.find((specific) => specific.id === Number(id)); //filter for matching note with specific id
  let [specificNote, setSpecificNote] = useState(null);

  useEffect(() => {
    getNote();
  }, []);

  let getNote = async () => {
    let response = await fetch(`http://localhost:8000/notes/${id}`);
    let data = await response.json();
    setSpecificNote(data);
  };

  let createNote = async () => {
    await fetch(`http://localhost:8000/notes/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...specificNote, updated: new Date() }),
    });
  };

  let updateNote = async () => {
    await fetch(`http://localhost:8000/notes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...specificNote, updated: new Date() }),
    });
  };

  let deleteNote = async () => {
    await fetch(`http://localhost:8000/notes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ specificNote }),
    });
    navigate("/");
  };

  let handleSubmit = () => {
    if (id != "new" && !specificNote.body) {
      deleteNote();
    } else if (id == "new") {
      updateNote();
    } else if (id === "new" && specificNote !== null) {
      createNote();
    }
    navigate(-1);
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <ArrowLeft onClick={handleSubmit} />
          </Link>
        </h3>
        <button onClick={deleteNote}>Delete</button>
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
