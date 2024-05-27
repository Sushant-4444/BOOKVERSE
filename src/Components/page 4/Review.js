import React from "react";

const Review = ({ person, bookName, rating, content, yearOld }) => {
  return (
    <div className="review">
      <div className="review-header">
        <span className="person">{person}</span>
        <span className="rating">{rating} stars</span>
      </div>
      <div className="review-body">
        <p className="book-name">{bookName}</p>
        <p className="book-format">e-Books, Audio-Books</p>
        <p className="content">{content}</p>
      </div>
      <div className="review-footer">
        <span className="year-old">{yearOld} years old</span>
      </div>
    </div>
  );
};

export default Review;