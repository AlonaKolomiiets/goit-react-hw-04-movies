import React , { PropTypes }from "react";

const Cast = ({ credits }) => {
  return (
    <ul>
      {credits.map((actor) => (
        <li key={actor.id}>
          <img
            src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
            alt={actor.name}
          />
          <h2>{actor.name}</h2>
          <p>{actor.character}</p>
        </li>
      ))}
    </ul>
  );
};

// Cast.defaultProps = {
//     message: "No feedback given",
//   };
export default Cast;




