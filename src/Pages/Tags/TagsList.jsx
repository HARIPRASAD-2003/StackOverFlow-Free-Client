import React from "react";
// import { Link } from "react-router-dom";
import "./Tags.css";
import Tag from "./Tag";
// import { Link } from "react-router-dom";


const TagsList = ({ tagsList }) => {
  return (
    <div className="tags-list-container">
    {
      tagsList.map((tag, index) => (
        <Tag tag={tag} key={index+1}/>
    ))}
    </div>
  );
};

export default TagsList;