import React from "react";
import notes from "../assests/data";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assests/arrow-left.svg";

const NotePage = () => {
  const { id } = useParams();
  const specificNote = notes.find((specific) => specific.id === Number(id)); //filter for matching note with specific id
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
