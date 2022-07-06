import React from "react";

const ListItem = ({ noteProp }) => {
  return (
    <div>
      <h3>{noteProp.body}</h3>
    </div>
  );
};

export default ListItem;
