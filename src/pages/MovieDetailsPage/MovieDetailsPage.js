import React, { useState, useEffect } from "react";
import { useHistory, useLocation, useParams, Route } from "react-router-dom";
import routes from "../../routes";
import {
  getMovieDetails,
  getMovieDetailsCredits,
  getMovieDetailsReviews,
} from "../../helpers/request";
import Loader from "../../components/Loader/Loader";
import Cast from "../../components/Cast/Cast";
import Reviews from "../../components/Reviews/Reviews";
import MoviePreview from "../../components/MoviePreview/MoviePreview";
import Button from "../../components/Button/Button";
import AdditionalInfo from "../../components/AdditionalInfo/AdditionalInfo";

const MovieDetailsPage = () => {
  const params = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [credits, setCredits] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [isLoad, setIsLoad] = useState(true);
  const [isError, setIsError] = useState(false);
  const { movieId } = params;

  const movieIdData = async () => {
    try {
      const { data: movie } = await getMovieDetails(movieId);
      setMovieDetails(movie);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoad(false);
    }
  };

  useEffect(() => {
    movieIdData();
  }, []);

  const movieCredits = async () => {
    try {
      const {
        data: { cast },
      } = await getMovieDetailsCredits(movieId);
      setCredits(cast);
    } catch (error) {
      console.log(error);
    }
  };

  const movieReviews = async () => {
    try {
      const {
        data: { results },
      } = await getMovieDetailsReviews(movieId);

      setReviews(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    movieCredits();
    movieReviews();
  }, []);

  const history = useHistory();
  const location = useLocation();
  const handleGoBack = () => {
    // location.state && location.state.from
    //   ? history.push(location.state.from)
    //   : history.push(routes.home);

    history.push(location?.state?.from || routes.home);
  };
  return (
    <>
      <Button handleGoBack={handleGoBack} />

      {isError ? (
        <h1>NOT FOUND</h1>
      ) : isLoad ? (
        <Loader />
      ) : (
        <>
          <MoviePreview movieDetails={movieDetails} />
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
