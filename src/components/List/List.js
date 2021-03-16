import React from "react";
import { Link, useLocation } from "react-router-dom";
import routes from "../../routes";
import PropTypes from "prop-types";
import styles from "./List.module.css";

const List = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map((movie) => (
        <li className={styles.listStyle} key={movie.id}>
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

List.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

export default List;
