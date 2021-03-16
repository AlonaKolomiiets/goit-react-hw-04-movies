import React from "react";
import PropTypes from "prop-types";
import styles from "./MoviePreview.module.css";

const MoviePreview = ({ movieDetails }) => {
  // console.log("movieDetails", movieDetails);
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
    original_title: PropTypes.string.isRequired,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
  }),
};
