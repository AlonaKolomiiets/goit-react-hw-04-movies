import React, { Component, useState, useEffect } from "react";
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
  NavLink,
  Route,
} from "react-router-dom";
import { withCreadentials } from "../../helpers/request";
import Loader from "../../components/Loader/Loader";
import Cast from "../../components/Cast/Cast";
import axios from "axios";
import routes from "../../routes";
import Reviews from "../../components/Reviews/Reviews";

const MovieDetailsPage = () => {
  const match = useRouteMatch();
  const params = useParams();
  const history = useHistory();
  const location = useLocation();
  // console.log('match',match);
  // console.log('params',params);
  // console.log("history", history);
  // console.log("location", location);

  const [movieDetails, setMovieDetails] = useState({});
  const [credits, setCredits] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [isLoad, setIsLoad] = useState(true);
  // const [backdrop_path, setBackdrop_path] = useState(
  //   `/kqjL17yufvn9OVLyXYpvtyrFfak.jpg`
  // );
  const movieIdData = async () => {
    const { data: movie } = await axios.get(
      withCreadentials(`https://api.themoviedb.org/3/movie/${params.movieId}?`)
    );
    setMovieDetails(movie);
    setIsLoad(false);
  };
  useEffect(() => movieIdData(), []);

  const movieCredits = async () => {
    const {
      data: { cast },
    } = await axios.get(
      withCreadentials(
        `https://api.themoviedb.org/3/movie/${params.movieId}/credits?`
      )
    );
    setCredits(cast);
  };
  useEffect(() => movieCredits(), []);

  const movieReviews = async () => {
    const {
      data: { results },
    } = await axios.get(
      withCreadentials(
        `https://api.themoviedb.org/3/movie/${params.movieId}/reviews?`
      )
    );
    setReviews(results);
  };
  useEffect(() => movieReviews(), []);

  console.log(reviews);
  // console.log(movieDetails.poster_path);
  // console.log(params.movieId);
  // console.log(match.url);
  const movieGenre = movieDetails.genres || [];
  const urlIMG = movieDetails.backdrop_path || movieDetails.poster_path;
  return (
    <>
      {isLoad ? (
        <Loader />
      ) : (
        <>
          <button>Go back</button>
          <div>
            <div>
              {urlIMG && (
                <img src={`https://image.tmdb.org/t/p/w500${urlIMG}`} alt="" />
              )}
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
                <NavLink to={`${match.url}/cast`}>Cast</NavLink>
              </li>
              <li>
                <NavLink to={`${match.url}/reviews`}>Reviews</NavLink>
              </li>
            </ul>
          </div>
          <Route
            path={routes.movieCast}
            render={() => <Cast credits={credits} />}
          />
          <Route path={routes.movieDetailsReviews} component={Reviews} />
        </>
      )}
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
