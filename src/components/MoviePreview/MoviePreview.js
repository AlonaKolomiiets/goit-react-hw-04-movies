import React from "react";

const MoviePreview = ({ urlIMG, movieDetails, movieGenre }) => {
  return (
    <div>
      <div>
        {urlIMG && (
          <img src={`https://image.tmdb.org/t/p/w500${urlIMG}`} alt="" />
        )}
      </div>
      <h2>
        {movieDetails.original_title}
        <span>({movieDetails.release_date.slice(0, 4)})</span>
      </h2>
      <p>User score: {movieDetails.vote_average * 10}%</p>
      <h3>Overview</h3>
      <p>{movieDetails.overview}</p>
      <h3>Genres</h3>
      <ul>
        {movieGenre.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MoviePreview;
