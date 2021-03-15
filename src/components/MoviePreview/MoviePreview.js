import React from "react";
import PropTypes from "prop-types";
import styles from "./MoviePreview.module.css";

const MoviePreview = ({  movieDetails }) => {
  console.log("movieDetails", movieDetails);
  const movieGenre = movieDetails.genres || [];
  const urlIMG = movieDetails.backdrop_path || movieDetails.poster_path;
  return (
    <div className={styles.MoviePreviewContainer}>
      <div>
        {urlIMG && (
          <img
            className={styles.img}
            src={`https://image.tmdb.org/t/p/w500${urlIMG}`}
            alt={movieDetails.original_title}
          />
        )}
      </div>
      <div className={styles.thumb}>
        <h2 className={styles.title}>
          {movieDetails.original_title}
          <span> ({movieDetails.release_date.slice(0, 4)})</span>
        </h2>
        <p>User score: {movieDetails.vote_average * 10}%</p>
        <h3>Overview</h3>
        <p>{movieDetails.overview}</p>
        <h3>Genres</h3>
        <ul className={styles.list}>
          {movieGenre.map((genre) => (
            <li className={styles.listItem} key={genre.id}>
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MoviePreview;

MoviePreview.propTypes = {
  movieDetails: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
  }),
  // movieGenre: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     original_title: PropTypes.number.isRequired,
  //     release_date: PropTypes.string.isRequired,
  //     vote_average: PropTypes.string.isRequired,
  //     overview: PropTypes.string.isRequired,
  //   })
  // ),
};

// https://i.pinimg.com/originals/8a/eb/d8/8aebd875fbddd22bf3971c3a7159bdc7.png
// MoviePreview.propTypes = {
//   filteredContacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }),
//   ).isRequired,

//   deleteContact: PropTypes.func.isRequired,
// };
