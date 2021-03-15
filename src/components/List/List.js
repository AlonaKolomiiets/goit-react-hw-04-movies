import React from "react";
import { Link, useLocation } from "react-router-dom";
import routes from "../../routes";

const List = ({ movies }) => {
  const location = useLocation();
  // console.log("location2", location);
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link
            to={{
              pathname: `${routes.movies}/${movie.id}`,
              state: { from: location },
            }}
          >
            {movie.original_title ? movie.original_title : movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default List;
