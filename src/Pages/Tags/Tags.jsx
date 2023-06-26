import React from "react";
// import { useSelector } from "react-redux"
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import TagsList from "./TagsList";
import "./Tags.css";
import { tagsList } from "../../components/Tags/Tag";

const Tags = () => {

  const tagList = tagsList

  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="tag-container">
        <h1 className="tags-h1">Tags</h1>
        <p className="tags-p">
          A tag is a keyword or label that categorizes your question with other,
          similar questions.
        </p>
        <p className="tags-p">
          Using the right tags makes it easier for others to find and answer
          your question.
        </p>
        <TagsList tagsList={tagList} />
      </div>
    </div>
  );
};

export default Tags;