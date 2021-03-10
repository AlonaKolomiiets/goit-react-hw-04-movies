import React, { Component, useState, useEffect } from "react";
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { withCreadentials } from "../../helpers/request";
import axios from "axios";

// class MovieDetailsPage extends Component {
//   state = {
//     genres: null,
//     id: null,
//     backdrop_path: null,
//   };

//   async componentDidMount() {
//     const { movieId } = this.props.match.params;

//     const response = await axios.get(
//       withCreadentials(`https://api.themoviedb.org/3/movie/${movieId}?`)
//     );
//     this.setState({ ...response.data });
//   }
//   render() {
//     console.log(this.state);
//     return <div></div>;
//   }
// }

// export default MovieDetailsPage;

const MovieDetailsPage = () => {
  const match = useRouteMatch();
  const params = useParams();
  const history = useHistory();
  const location = useLocation();
  // console.log('match',match);
  // console.log('params',params);
  // console.log('history',history);
  // console.log('location',location);

  const [movieDetails, setMovieDetails] = useState({});

  const fetchData = async () => {
    const response = await axios.get(
      withCreadentials(
        `https://api.themoviedb.org/3/movie/${match.params.movieId}?`
      )
    );
    const movie = response.data;
    setMovieDetails(movie);
  };
  useEffect(() => fetchData(), []);
  // console.log(movieDetails);
  return (
    <>
      <button>Go back</button>
      <h2>Additional information</h2>
      {/* <h2>{console.log(match.params.movieId)}</h2> */}
    </>
  );
};

export default MovieDetailsPage;
