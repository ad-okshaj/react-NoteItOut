import React from "react";
import { Link } from "react-router-dom";

let getDate = (noteProp) => {
  return new Date(noteProp.updated).toLocaleDateString();
};

let getTitle = (noteProp) => {
  const title = noteProp.body.split("\n")[0];
  if (title.length > 40) {
    return title.slice(0, 40);
  }
  return title;
};

let getContent = (noteProp) => {
  let title = getTitle(noteProp);
  let content = noteProp.body.replaceAll("\n", " ");
  content = content.replaceAll(title, "");

  if (content.length > 45) {
    return content.slice(0, 45) + "...";
  } else {
    return content;
  }
};

// noteProp ie. object destructuring
const ListItem = ({ noteProp }) => {
  return (
    <Link to={`/note/${noteProp.id}`}>
      <div className="notes-list-item">
        <h3>{getTitle(noteProp)}</h3>
        <p>
          <span>{getDate(noteProp)}</span>
          {getContent(noteProp)}
        </p>
      </div>
    </Link>
  );
};

export default ListItem;
