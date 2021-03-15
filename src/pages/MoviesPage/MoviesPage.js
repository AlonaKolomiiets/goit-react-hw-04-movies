import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import { withCreadentials } from "../../helpers/request";
import List from "../../components/List/List";

const MoviesPage = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const history = useHistory();
  console.log("history", history);
  console.log("location", location);
  const inputHandler = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const {
        data: { results },
      } = await axios.get(
        withCreadentials(
          `https://api.themoviedb.org/3/search/movie?query=${search}&`
        )
      );
      // console.log(results);
      setMovies(results);
      history.pushState({ ...location, search: `query=${search}` });
      setSearch("");
    } catch (error) {
      const errorMessage = JSON.stringify(error);
      console.log(errorMessage);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
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
