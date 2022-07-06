import React from "react";
import notes from "../assests/data";
import { useParams } from "react-router-dom";

const NotePage = () => {
  const { id } = useParams();
  const specificNote = notes.find((specific) => specific.id === Number(id)); //filter for matching note with specific id
  return (
    <div>
      <p>Hello, Clarice.</p>
      <p>{specificNote?.body}</p>
    </div>
  );
};

export default NotePage;
