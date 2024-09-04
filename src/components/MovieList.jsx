import React from "react";

function MovieList({ movies }) {
  return (
    <div>
      <h2>Movie List - {Date.now()}</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
