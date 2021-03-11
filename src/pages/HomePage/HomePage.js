import axios from "axios";
import React, { Component } from "react";
import { withCreadentials } from "../../helpers/request";
import List from "../../components/List/List";

class HomePage extends Component {
  state = {
    popularMovies: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      withCreadentials("https://api.themoviedb.org/3/trending/all/day?")
    );
    //console.log(response.data.results);
    this.setState({ popularMovies: response.data.results });
  }
  render() {
    // const { url } = this.props.match;
    const { popularMovies } = this.state;
    return (
      <>
        <h2>Trending today</h2>
        <List movies={popularMovies} />
      </>
    );
  }
}

export default HomePage;

// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
