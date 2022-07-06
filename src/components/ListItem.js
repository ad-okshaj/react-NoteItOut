import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ noteProp }) => {
  return (
    <Link to={`/note/${noteProp.id}`}>
      <h3>{noteProp.body}</h3>
    </Link>
  );
};

export default ListItem;
