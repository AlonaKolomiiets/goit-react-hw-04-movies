import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { getMovieSearch } from "../../helpers/request";
import List from "../../components/List/List";
import styles from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const history = useHistory();

  const searchMovie = async (query) => {
    try {
      const {
        data: { results },
      } = await getMovieSearch(query);
      setMovies(results);
      history.push({ ...location, search: `query=${query}` });
      setSearch("");
    } catch (error) {
      const errorMessage = JSON.stringify(error);
      console.log(errorMessage);
    }
  };

  const inputHandler = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    searchMovie(search);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("query");
    query && searchMovie(query);
  }, []);

  return (
    <div>
      <form className={styles.form} onSubmit={submitHandler}>
        <input
          onChange={inputHandler}
          type="text"
          name="search"
          value={search}
        ></input>
        <button>Search</button>
      </form>
      <List movies={movies} />
    </div>
  );
};

export default MoviesPage;
