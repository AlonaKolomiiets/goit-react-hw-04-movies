import React from "react";
import { Link } from "react-router-dom";
import routes from "../../routes";

const List = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`${routes.movies}/${movie.id}`}>
            {movie.original_title ? movie.original_title : movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default List;
