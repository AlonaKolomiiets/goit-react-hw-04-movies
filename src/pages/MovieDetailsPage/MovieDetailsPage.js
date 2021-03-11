import React, { Component, useState, useEffect } from "react";
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
  Link,
} from "react-router-dom";
import { withCreadentials } from "../../helpers/request";
import axios from "axios";
import routes from "../../routes";

const MovieDetailsPage = () => {
  const match = useRouteMatch();
  const params = useParams();
  const history = useHistory();
  const location = useLocation();
  // console.log('match',match);
  // console.log('params',params);
  console.log("history", history);
  console.log("location", location);

  const [movieDetails, setMovieDetails] = useState({});
  // const [backdrop_path, setBackdrop_path] = useState(
  //   `/kqjL17yufvn9OVLyXYpvtyrFfak.jpg`
  // );
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
  console.log(movieDetails);
  console.log(movieDetails.poster_path);
  const movieGenre = movieDetails.genres || [];
  const url = movieDetails.backdrop_path || movieDetails.poster_path;
  return (
    <>
      <button>Go back</button>
      <div>
        <div>
          {url && <img src={`https://image.tmdb.org/t/p/w500${url}`} alt="" />}
        </div>
        <h2>{movieDetails.original_title}</h2>
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
      <div>
        <h5>Additional information</h5>
        <ul>
          <li>
            <Link to={routes.movieCast}>Cast</Link>
          </li>
          <li>
            <Link to={routes.movieDetailsReviews}>Reviews</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MovieDetailsPage;

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
