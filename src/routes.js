const routes = {
  home: "/", //- компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
  movies: "/movies", //- компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
  movieDetails: "/movies/:movieId", // - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
  movieCast: "/movies/:movieId/cast", // - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
  movieDetailsReviews: "/movies/:movieId/reviews", //- компонент <Reviews>, информация об обзорах. Рендерится на странице <MovieDetailsPage>.
};

export default routes;
