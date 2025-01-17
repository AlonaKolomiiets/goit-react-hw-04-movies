import React, { Component } from "react";
import { getPopularMovies } from "../../helpers/request";
import List from "../../components/List/List";
import styles from "./HomePage.module.css";

class HomePage extends Component {
  state = {
    popularMovies: [],
  };

  async componentDidMount() {
    const { data } = await getPopularMovies();
    this.setState({ popularMovies: data.results });
  }
  render() {
    const { popularMovies } = this.state;
    return (
      <>
        <h2 className={styles.title}>Trending today</h2>
        <List movies={popularMovies} />
      </>
    );
  }
}

export default HomePage;
