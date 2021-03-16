import React from "react";
import PropTypes from "prop-types";
import styles from "./Reviews.module.css";

const Reviews = ({ reviews }) => {
  return (
    <>
      {reviews.length ? (
        <ul className={styles.list}>
          {reviews.map((review) => (
            <li className={styles.listItem} key={review.id}>
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

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      username: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};
export default Reviews;
