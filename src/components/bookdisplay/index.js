import React from "react";
import "./index.scss";

const Bookdisplay = ({ title, authors, description, publishDate }) => {
  return (
    <div className="bookdisplay">
      <div className="title">{title}</div>
      <div className="authors">{authors}</div>
      <div className="publishDate">{publishDate}</div>
      <div className="description">{description}</div>
    </div>
  );
};
export default Bookdisplay;
