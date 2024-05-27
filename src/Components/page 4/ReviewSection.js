import React from "react";
import Review from "./Review";
import "./ReviewsSection.css";

const reviewsData = [
  {
    person: "Person 1",
    rating: 3,
    bookName: "BookVerse",
    content: "reviewwwwwww wwwwwwwwww",
    yearOld: "2",
  },
  {
    person: "Person 2",
    rating: 5,
    bookName: "BookVerse",
    content: "hhhhhhhhhhhhhhhhhhhhhhhhhhhh",
    yearOld: "unknown",
  },
];

const ReviewsSection = () => {
  return (
    <div className="reviews-section">
      {reviewsData.map((review, index) => (
        <Review
          key={index}
          person={review.person}
          rating={review.rating}
          bookName={review.bookName}
          content={review.content}
          yearOld={review.yearOld}
        />
      ))}
    </div>
  );
};

export default ReviewsSection;