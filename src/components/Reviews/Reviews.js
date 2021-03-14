import React from "react";

const Reviews = ({ reviews }) => {
  return (
    <>
      {reviews.length ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <h2>Autor:{review.author_details.username}</h2>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h2>We don't have any reviews for this movie</h2>
      )}
    </>
  );
};

export default Reviews;
