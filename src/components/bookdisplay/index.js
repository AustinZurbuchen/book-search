import React from "react";
import "./index.scss";

const Bookdisplay = ({
  title,
  authors,
  description,
  publishDate,
  rating,
  link,
}) => {
  return (
    <div className="bookdisplay">
      <div className="columns">
        <div className="titleauthor column">
          <a className="title" href={link}>
            {title}
          </a>
          <div className="authors">{authors}</div>
        </div>
        <div className="daterating column">
          <div className="publishDate">{publishDate}</div>
          <div className="rating">{rating} &#9733;</div>
        </div>
      </div>
      <div className="description">{description}</div>
    </div>
  );
};
export default Bookdisplay;
