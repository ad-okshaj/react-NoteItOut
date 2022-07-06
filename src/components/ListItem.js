import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ noteProp }) => {
  return (
    <Link to={`/note/${noteProp.id}`}>
      <div className="notes-list-item">
        <h3>{noteProp.body}</h3>
      </div>
    </Link>
  );
};

export default ListItem;
