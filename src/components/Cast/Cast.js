import React from "react";
import PropTypes from "prop-types";
import styles from "./Cast.module.css";

const Cast = ({ credits }) => {
  return (
    <ul className={styles.list}>
      {credits.map((actor) => (
        <li className={styles.listItem} key={actor.id}>
          {actor.profile_path ? (
            <img
              className={styles.img}
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
            />
          ) : (
            <img
              className={styles.img}
              src={`https://i.pinimg.com/originals/8a/eb/d8/8aebd875fbddd22bf3971c3a7159bdc7.png`}
              alt={actor.name}
            />
          )}

          <h2>{actor.name}</h2>
          <p>{actor.character}</p>
        </li>
      ))}
    </ul>
  );
};

Cast.propTypes = {
  credits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};
export default Cast;
