import React, { useEffect, useState } from "react";
// import notes from "../assests/data"; - no longer using this file.
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assests/arrow-left.svg";

const NotePage = () => {
  const { id } = useParams();
  //  const specificNote = notes.find((specific) => specific.id === Number(id)); - filter for matching note with specific id
  let [specificNote, setSpecificNote] = useState(null);

  useEffect(() => {
    getNotes();
  }, [id]);

  let getNotes = async () => {
    let response = await fetch(`http://localhost:8000/notes/${id}`);
    let data = await response.json();
    setSpecificNote(data);
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <ArrowLeft />
          </Link>
        </h3>
      </div>
      <textarea value={specificNote?.body}></textarea>
    </div>
  );
};

export default NotePage;
