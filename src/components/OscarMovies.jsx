import React from "react";

function OscarMovies({ OscarWonMovie }) {
  return (
    <div>
      {" "}
      <div>
        <h2>oscar Won Movies - {Date.now()}</h2>
        <ul>
          {OscarWonMovie.map(movie => (
            <li key={movie.id}>{movie.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OscarMovies;
