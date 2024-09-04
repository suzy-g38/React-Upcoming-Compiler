import React from "react";
import MovieList from "./MovieList";
import OscarMovies from "./OscarMovies";
import Header from "./Header";

function MoviePage({ movies, title }) {
  const OscarWonMovie = movies.filter(movie => movie.isOscared);

  return (
    <div>
      {title}
      <Header title={title} />

      <MovieList movies={movies} />

      <OscarMovies OscarWonMovie={OscarWonMovie} />
    </div>
  );
}

export default MoviePage;
