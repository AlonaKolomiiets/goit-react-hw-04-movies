import React from "react";
import styles from "./MoviePreview.module.css";

const MoviePreview = ({ urlIMG, movieDetails, movieGenre }) => {
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
            <li className={styles.listItem} key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MoviePreview;
