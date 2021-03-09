import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import routes from "./routes";

const HomePage = lazy(() =>
  import("./pages/HomePage/HomePage.js" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import(
    "./pages/MoviesPage/MoviesPage.js" /* webpackChunkName: "movie-page" */
  )
);
const MovieDetailsPage = lazy(() =>
  import(
    "./pages/MovieDetailsPage/MovieDetailsPage.js" /* webpackChunkName: "movie-details-page" */
  )
);

function App() {
  return (
    <>
      <Header></Header>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path={routes.home} component={HomePage} />
          <Route path={routes.movies} component={MoviesPage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          <Redirect to={routes.home} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;

