import React, { useState, useEffect } from "react";
import { useHistory, useLocation, useParams, Route } from "react-router-dom";
import { withCreadentials } from "../../helpers/request";
import Loader from "../../components/Loader/Loader";
import Cast from "../../components/Cast/Cast";
import axios from "axios";
import routes from "../../routes";
import Reviews from "../../components/Reviews/Reviews";
import MoviePreview from "../../components/MoviePreview/MoviePreview";
import Button from "../../components/Button/Button";
import AdditionalInfo from "../../components/AdditionalInfo/AdditionalInfo";

const MovieDetailsPage = () => {
  const params = useParams();

  // console.log('match',match);
  // console.log('params',params);
  // console.log("history", history);
  // console.log("location", location);

  const [movieDetails, setMovieDetails] = useState({});
  const [credits, setCredits] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  const movieIdData = async () => {
    const { data: movie } = await axios.get(
      withCreadentials(`https://api.themoviedb.org/3/movie/${params.movieId}?`)
    );
    setMovieDetails(movie);
    setIsLoad(false);
  };
  useEffect(() => {
    movieIdData();
  }, []);

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

  useEffect(() => {
    movieCredits();
    movieReviews();
  }, []);

  const history = useHistory();
  const location = useLocation();
  // console.log(location.state.from, location.state.from);
  const handleGoBack = () => {
    // location.state && location.state.from
    //   ? history.push(location.state.from)
    //   : history.push(routes.home);

    history.push(location?.state?.from || routes.home);
  };

  const movieGenre = movieDetails.genres || [];
  const urlIMG = movieDetails.backdrop_path || movieDetails.poster_path;
  return (
    <>
      {isLoad ? (
        <Loader />
      ) : (
        <>
          <Button handleGoBack={handleGoBack} />
          <MoviePreview
            urlIMG={urlIMG}
            movieDetails={movieDetails}
            movieGenre={movieGenre}
          />
          <AdditionalInfo />
          <Route
            path={routes.movieCast}
            render={(props) => <Cast {...props} credits={credits} />}
          />
          <Route
            path={routes.movieDetailsReviews}
            render={(props) => <Reviews {...props} reviews={reviews} />}
          />
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
